const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/token-auth");

const {
  getCartItems,
  addCartItem,
  deleteCartItem,
} = require("../controller/cart-controller");

// Get all cart http://localhost:4000/cart/all/{user_id}
router.get("/all/:user_id", authenticateToken, getCartItems);

// Add to cart http://localhost:4000/cart/{user_id}
router.post("/:user_id", authenticateToken, addCartItem);

// Remove to cart http://localhost:4000/cart/{user_id}/{cart_id}
router.delete("/:user_id/:cart_id", authenticateToken, deleteCartItem);

// Export all cart routers from here
module.exports = router;
