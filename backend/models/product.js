import db from "../utils/database.js";
 
export class Product {
  constructor(id, category, name, description, price, material, quantity, imageGold, imageSilver, imageRoseGold, sizeRange, collection) {
    this.id = id;
    this.category = category;
   
    this.name = name;
    this.description = description;
    this.price = price;
    this.material = material;
    this.quantity = quantity;
    this.imageGold = imageGold;
    this.imageSilver = imageSilver;
    this.imageRoseGold = imageRoseGold;
    this.sizeRange = sizeRange;
    this.collection = collection;
  }
 
  save() {
    return  db.execute(
    `INSERT INTO products
    (category, name, description, price, material, quantity, imageGold, imageSilver, imageRoseGold, sizeRange, collection)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [this.category, this.name, this.description, this.price, this.material, this.quantity, this.imageGold, this.imageSilver, this.imageRoseGold, this.sizeRange || null, this.collection || null]
  );
  }
   
 
  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }
 
  static findById(id) {
    return db.execute("SELECT * FROM products WHERE ID = ?", [id]);
  }
 
  static updateById(productId, category, name, description, price, material, quantity, imageGold, imageSilver, imageRoseGold, sizeRange, collection) {
    return   db.execute(
    `UPDATE products SET
    category = ?, name = ?, description = ?, price = ?, material = ?, quantity = ?, imageGold = ?, imageSilver = ?, imageRoseGold = ?, sizeRange = ?, collection = ?
    WHERE ID = ?`,
    [category, name, description, price, material, quantity, imageGold, imageSilver, imageRoseGold, sizeRange || null, collection || null, productId]
  );
  }
 
  static deleteById(id) {
    return db.execute("DELETE FROM products WHERE ID = ?", [id]);
  }
static getTopBestSellers() {
  return db.execute(
    "SELECT * FROM products ORDER BY sold DESC LIMIT 3"
  );
}
 
  static searchByQuery(query) {
    return db.execute(
    "SELECT * FROM products WHERE category LIKE ? OR name LIKE ? OR description LIKE ? OR price LIKE ? OR material LIKE ?",
    [`%${query}%`, `%${query}%`, `%${query}%` , `%${query}%` , `%${query}%`]
  );
  }
  static getBestSellers(limit = 6) {
  return db.execute(
    `SELECT p.*, SUM(s.quantitySold) AS totalSold
     FROM sales s
     JOIN products p ON p.ID = s.productID
     GROUP BY s.productID
     ORDER BY totalSold DESC
     LIMIT ?`,
    [limit]
  );
}
static increaseSold(productId, qty) {
  return db.execute(
    "UPDATE products SET sold = sold + ? WHERE ID = ?",
    [qty, productId]
  );
}
 
    static getCategory(categoryName) {
    return db.execute(
      "SELECT * FROM products WHERE category = ?",
      [categoryName]
    );
  }
 
static reduceQuantity(productId, qty) {
  const quantityToSubtract = Number(qty) || 0;
 
  return db.execute(
    `UPDATE products
     SET quantity = GREATEST(quantity - ?, 0)
     WHERE ID = ?`,
    [quantityToSubtract, productId]
  );
}
 static getCollection(collectionName) {
    return db.execute(
      "SELECT * FROM products WHERE collection = ?",
      [collectionName]
    );
  }
}
 
 