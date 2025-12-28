import db from "../utils/database.js";

export class Cart {
  constructor(id, userId, productId) {
    this.id = id;
    this.userId = userId;
    this.productId = productId;
  }
 saveCart() {
    return  db.execute(
    `INSERT INTO carts (userID, productID, quantity)
     VALUES (?, ?, 1)
     ON DUPLICATE KEY UPDATE quantity = quantity + 1`,
    [this.userId, this.productId]
  );
  }
    static fetchCartByUserId(userId) {  
  return db.execute(
      `SELECT 
          c.productID,
          p.ID,
          p.name,
          p.price,
          p.imageGold,
          p.imageSilver,
          p.imageRoseGold,
          c.quantity
       FROM carts c
       JOIN products p ON p.ID = c.productID
       WHERE c.userID = ?`,
      [userId]
  );
}

    static removeByProductId(userId, productId) {   
    return db.execute(
        "DELETE FROM carts WHERE userID = ? AND productID = ?",
        [userId, productId]
    );
  }
  static clearCartByUserId(userId) {   
    return db.execute(
        "DELETE FROM carts WHERE userID = ?",
        [userId]
    );
  }
static updateQuantity(userId, productId, quantity) {
  return db.execute(
    `UPDATE carts c
     JOIN products p ON p.ID = c.productID
     SET c.quantity = ?
     WHERE c.userID = ?
       AND c.productID = ?
       AND ? <= p.quantity`,
    [quantity, userId, productId, quantity]
  );
}

static getItemsByUserId(userId) {
  return db.execute(
    "SELECT productID, quantity FROM carts WHERE userID = ?",
    [userId]
  );
}


}
