const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "david",
  password: "#1WinterFan",
  database: "sys",
});

module.exports = connection;
