const mysql = require("mysql2");
const config = require("./db-config");

const db = mysql.createConnection(config.db);

// connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database.");

  /* 
    Close the db connection
    connection.end((err) => {
        if (err) {
        console.error("Error closing the database connection:", err);
        return;
        }
        console.log("Database connection closed.");
    });
  */
});

module.exports = db;
