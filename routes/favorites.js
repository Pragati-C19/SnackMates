const express = require("express");
const router = express.Router();

const { getFavorites, addFavorites, deleteFavorite } = require("../controller/favorites-controller");

//get all favorites http://localhost:4000/favorites/all/users/{user_id}
router.get("/all/:user_id", getFavorites);

//add to favorites http://localhost:4000/favorites/users/{user_id}
router.post("/:user_id", addFavorites);

//remove to favorites http://localhost:4000/favorites/users/{user_id}/{favorite_id}
router.delete("/users/:user_id/:favorite_id", deleteFavorite);

//Export all userrouters from here
module.exports = router;