//All request and response for User API wrote here

//DB Connection
const jwt = require("jsonwebtoken");
const db = require("../database/db-connection");

//Code is showing 'MODULE_NOT_FOUND' error and didn't give token bcoz we haven't call .env function
require("dotenv").config();

const registerUser = (req,res) =>{
    const {
        userID,
        emailID,
        userName,
        password,
        created_at,
      } = req.body;
    
      // Insert user data into the MySQL database
      const registerQuery =
        "INSERT INTO user_table (user_id, email, user_name, password, created_at) VALUES (?, ?, ?, ?, NOW())";
      db.query(
        registerQuery,
        [userID, emailID, userName, password, created_at],
        (error, results) => {
          if (error) {
            console.error("Error While Registering User in MySQL:", error);
            res.status(500).json({ statusCode: 500, error: "Registration Failed" });
          } else {
            res
              .status(201)
              .json({ statusCode: 201, message: "User Registered Successfully" });
          }
          console.log("[INFO] registerQuery: ", results);
        }
      );
}

const loginUser = (req,res) =>{

}

const logoutUser = (req,res)=>{

}

module.exports = { registerUser, loginUser, logoutUser };