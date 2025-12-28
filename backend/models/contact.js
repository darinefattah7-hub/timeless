import db from "../utils/database.js";

export class Contact {
  constructor(id, firstName, lastName, email, phoneNumber, message) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.message = message;
  }
 saveContact() {
    return  db.execute(
    "INSERT INTO contactforms (firstName, lastName, email, phoneNumber, Message) VALUES (?, ?, ?, ?, ?)",
    [this.firstName, this.lastName, this.email, this.phoneNumber, this.message]
  );
  }
  static findUser(email, password) {
    return db.execute(
      "SELECT * FROM users WHERE users.email = ? AND users.password = ?",
      [email, password]
    );
  }
}
