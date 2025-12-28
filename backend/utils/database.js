import mysql2 from "mysql2";

const pool = mysql2
  .createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "timeless",
  })         
  .promise();

export default pool;
