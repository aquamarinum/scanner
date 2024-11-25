const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: "8080",
  user: "root",
  password: "root",
  database: "scannerdb",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log("Connection success");
  }
});

module.exports = connection;
