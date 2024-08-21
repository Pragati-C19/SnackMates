const express = require("express");
const router = express.Router();

const {
  getMenu,
  getMenus,
  getMenuByType,
} = require("../controller/menus-controller");

// Get all menus http://localhost:4000/menus/all
router.get("/all", getMenus);

// Get specific menu http://localhost:4000/menus/{menu_id}
router.get("/:menu_id", getMenu);

// Get specific menu by type http://localhost:4000/menus/type/{menu_type}
router.get("/type/:menu_type", getMenuByType);

// Export all menu routers from here
module.exports = router;
