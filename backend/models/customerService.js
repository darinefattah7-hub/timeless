import db from "../utils/database.js";

export class CustomerService {
  constructor(id, userId, experience, checkoutDifficulty, helpUseful) {
    this.id = id;
    this.userId = userId;
    this.experience = experience;
    this.checkoutDifficulty = checkoutDifficulty;
    this.helpUseful = helpUseful;
  }
 saveCustomerService() {
    return  db.execute(
    `INSERT INTO feedback_customer_service (userID, experience, checkoutDifficulty, helpUseful)
     VALUES (?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       experience = VALUES(experience),
       checkoutDifficulty = VALUES(checkoutDifficulty),
       helpUseful = VALUES(helpUseful),
       submitted_at = CURRENT_TIMESTAMP`,
    [this.userId, this.experience, this.checkoutDifficulty, this.helpUseful]
  );
  }
    
}
