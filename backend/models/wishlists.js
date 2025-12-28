import db from "../utils/database.js";

export class Wishlist {
  constructor(id, userId, productId) {
    this.id = id;
    this.userId = userId;
    this.productId = productId;
  }

    save() {
    return db.execute(
      "INSERT INTO wishlists (ID, productId) VALUES (?, ?)",
      [this.userId, this.productId]
    );
  }
 static fetchWishlistsByUserId(userId) {
  return db.execute(
    `SELECT 
        w.productID,
        p.ID,
        p.name, 
        p.price, 
        p.imageGold,
        p.imageSilver,
        p.imageRoseGold,
        w.addedAt
     FROM wishlists w
     JOIN products p ON p.ID = w.productID
     WHERE w.ID = ?
     ORDER BY w.addedAt DESC`,
    [userId]
  );
}
static isInWishlist(userID, productID) {
  return db.execute(
    "SELECT * FROM wishlists WHERE ID = ? AND productID = ?",
    [userID, productID]
  );
}

  static deleteByProductId(userId, productId) {
    return db.execute(
      "DELETE FROM wishlists WHERE ID = ? AND productID = ?",
      [userId, productId]
    );
  }
}