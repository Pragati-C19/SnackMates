const express = require("express");
const router = express.Router();

const {
  getFavorites,
  addFavorites,
  deleteFavorite,
} = require("../controller/favorites-controller");

// Get all favorites http://localhost:4000/favorites/all/{user_id}
router.get("/all/:user_id", getFavorites);

// Add to favorites http://localhost:4000/favorites/{user_id}
router.post("/:user_id", addFavorites);

// Remove to favorites http://localhost:4000/favorites/{user_id}/{favorite_id}
router.delete("/:user_id/:favorite_id", deleteFavorite);

// Export all favorites routers from here
module.exports = router;
