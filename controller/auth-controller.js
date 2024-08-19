//All request and response for User API wrote here

//DB Connection
const jwt = require("jsonwebtoken");
const connection = require("../database/db-connection");

//Code is showing 'MODULE_NOT_FOUND' error and didn't give token bcoz we haven't call .env function
require("dotenv").config();

const registerUser = (req,res) =>{
    console.log("this is a register")
}

const loginUser = (req,res) =>{

}

const logoutUser = (req,res)=>{

}

module.exports = { registerUser, loginUser, logoutUser };