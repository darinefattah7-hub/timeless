import db from "../utils/database.js";

export class User {
  constructor(id, username,email, password) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }
 saveUser() {
    return  db.execute(
    "INSERT INTO users (username, email, password,role) VALUES (?, ?, ?,?)",
    [this.username,this.email, this.password, "user"]
  );
  }
 static findUser(email, password) {
    return db.execute(
      "SELECT * FROM users WHERE users.email = ? AND users.password = ?",
      [email, password]
    );
  }
  static getAll() {
    return db.execute("SELECT * FROM users");
}

static updateRole(userId, newRole) {
    return db.execute("UPDATE users SET role = ? WHERE id = ?", [newRole, userId]);
}

}
