import db from "../utils/database.js";

export class Jewelry {
  constructor(id, userId, quality, taste, condition, style, variety) {
    this.id = id;
    this.userId = userId;
    this.quality = quality;
    this.taste = taste;
    this.condition = condition;
    this.style = style;
    this.variety = variety;
  }
 saveJewelry() {
    return  db.execute(
    `INSERT INTO feedback_jewelry
      (userID, quality, taste, goodCondition, styleLiked, varietyRating)
     VALUES (?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       quality = VALUES(quality),
       taste = VALUES(taste),
       goodCondition = VALUES(goodCondition),
       styleLiked = VALUES(styleLiked),
       varietyRating = VALUES(varietyRating),
       submitted_at = CURRENT_TIMESTAMP`,
    [this.userId, this.quality, this.taste, this.condition, this.style, this.variety]
  );
  }
    
}
