const express = require("express");
const router = express.Router();

const { getFavorites, addFavorites, deleteFavorite } = require("../controller/favorites-controller");

//get all favorites http://localhost:4000/favorites/users/{user_id}/all
router.get("/users/:user_id/all", getFavorites);

//add to favorites http://localhost:4000/favorites/users/{user_id}
router.post("/users/:user_id", addFavorites);

//remove to favorites http://localhost:4000/favorites/users/{user_id}/{favorite_id}
router.delete("/users/:user_id/:favorite_id", deleteFavorite);

//Export all userrouters from here
module.exports = router;