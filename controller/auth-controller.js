// All request and response for User API wrote here

// DB Connection
const jwt = require("jsonwebtoken");
const db = require("../database/db-connection");

// Code is showing 'MODULE_NOT_FOUND' error and didn't give token bcoz we haven't call .env function
require("dotenv").config();

const registerUser = (req, res) => {
  const { emailID, userName, password} = req.body;
  console.log("[INFO] registerUser: EmailID, Username and Password => ", emailID, userName, password);

  // Insert user data into the MySQL database
  const registerQuery =
    "INSERT INTO user_table ( email, user_name, password, created_at) VALUES ( ?, ?, ?, NOW())";
  db.query(
    registerQuery,
    [ emailID, userName, password],
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
};

const loginUser = (req, res) => {
  const { userName, password } = req.body;
  console.log("[INFO] loginUser: Username and Password => ", userName, password);

  // Retrieve user data from the database based on the provided email
  const loginQuery = "SELECT * FROM user_table WHERE user_name = ?";

  db.query(loginQuery, [userName], (error, results) => {
    if (error) {
      console.error("Error While Retrieving User Data:", error);
      res.status(500).json({ statusCode: 500, error: "Internal server error" });
    } else {
      if (results.length === 0) {
        // User with the provided email not found
        res.status(201).json({ statusCode: 404, error: "User not found" });
      } else {
        // User found, check password
        const user = results[0];
        console.log("If user found and password checking remain: ", user);

        // Compare the provided password with the stored password (plaintext)
        if (password === user.password) {
          // Passwords match, user is authenticated
          user.password = null;
          console.log("Passwords match, user is authenticated : ", user);

          // JWT Token Code
          const jwtToken = jwt.sign(user.user_id, process.env.JWT_SECRET);
          res.status(200).json({
            statusCode: 200,
            message: "Login Successful",
            accessToken: jwtToken,
            userId: user.user_id
          });
        } else {
          // Passwords do not match : Authentication failed
          res.status(201).json({
            statusCode: 401,
            error: "Wrong Password, Authentication Failed",
          });
        }
      }
    }
  });
};

const logoutUser = (req, res) => {
  // Since JWT tokens are stateless, there's no need to invalidate them server-side.
  // The client is handling token removal.
  res.status(200).json({
    statusCode: 200,
    message: "Logout Successful, token should be removed client-side.",
  });
};

module.exports = { registerUser, loginUser, logoutUser };
