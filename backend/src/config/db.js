const mysql = require("mysql2");

export const connection = mysql.createConnection({
  host: "localhost",
  user: "david",
  password: "#1WinterFan",
  database: "sys",
});
