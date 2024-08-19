const express = require("express");
const router = express.Router();

const { getRestaurantMenu, getRestaurants } = require("../controller/restaurants-controller");

//get all restaurants http://localhost:4000/restaurants/all
router.get("/all", getRestaurants);

//get specific restaurants menu http://localhost:4000/restaurants/{restaurant_id}/menu
router.get("/:restaurant_id/menu", getRestaurantMenu);

//Export all restaurants routers from here
module.exports = router;