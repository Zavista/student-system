const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "", // Host
  port: "", // Port
  user: "", // User
  password: "", // Password
  database: "", //Database Name
});

module.exports = connection;
