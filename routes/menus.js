const express = require("express");
const router = express.Router();

const { getMenu, getMenus, getMenuByType } = require("../controller/menus-controller");

//get all menus http://localhost:4000/menus/all
router.get("/all", getMenus);

//get specific menu http://localhost:4000/menus/{menu_id}
router.get("/:menu_id", getMenu);

//FIXME: Get Single Menu Type - Fetches details of a specific menu type. will need this after search tab

//get specific menu by type http://localhost:4000/menus/{menu_type}
router.get("/:menu_type", getMenuByType);

//Export all menu routers from here
module.exports = router;