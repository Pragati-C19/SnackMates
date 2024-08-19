const express = require("express");
const router = express.Router();

const { registerUser, loginUser, logoutUser } = require("../controller/auth-controller");

//User Registration http://localhost:4000/auth/register
router.post("/register", registerUser);

//User Login http://localhost:4000/auth/login
router.post("/login", loginUser);

//User Logout http://localhost:4000/auth/logout
router.post("/logout", logoutUser);

//Export all userrouters from here
module.exports = router;