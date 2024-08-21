const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/token-auth");

const {
  getFavorites,
  addFavorites,
  deleteFavorite,
} = require("../controller/favorites-controller");

// Get all favorites http://localhost:4000/favorites/all/{user_id}
router.get("/all/:user_id", authenticateToken, getFavorites);

// Add to favorites http://localhost:4000/favorites/{user_id}
router.post("/:user_id", authenticateToken, addFavorites);

// Remove to favorites http://localhost:4000/favorites/{user_id}/{favorite_id}
router.delete("/:user_id/:favorite_id", authenticateToken, deleteFavorite);

// Export all favorites routers from here
module.exports = router;
