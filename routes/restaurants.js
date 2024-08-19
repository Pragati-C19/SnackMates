const express = require("express");
const router = express.Router();

const { getRestaurantMenu, getRestaurants } = require("../controller/auth-controller");

//get all menus http://localhost:4000/restaurants/all
router.get("/all", getRestaurants);

//get specific menu http://localhost:4000/restaurants/{restaurant_id}/menu
router.get("/:id/menu", getRestaurantMenu);

//Export all userrouters from here
module.exports = router;