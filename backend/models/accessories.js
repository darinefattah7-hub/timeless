import db from "../utils/database.js";

export class Accessory {
  constructor(id, userId, quality, recommend, functionality, design, value) {
    this.id = id;
    this.userId = userId;
    this.quality = quality;
    this.recommend = recommend;
    this.functionality = functionality;
    this.design = design;
    this.value = value;
  }
 saveAccessories() {
    return  db.execute(
    `INSERT INTO feedback_accessories 
    (userID, quality, recommend, functionality, designRating, valueRating)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [this.userId, this.quality, this.recommend, this.functionality, this.design, this.value]
  );
  }
    
}
