const express = require("express");
const router = express.Router();

const { getMenus, getMenu } = require("../controller/auth-controller");

//get all menus http://localhost:4000/menus/all
router.get("/all", getMenus);

//get specific menu http://localhost:4000/menus/{menu_id}
router.get("/:id", getMenu);

//todo : Get Single Menu Type - Fetches details of a specific menu type. will need this after search tab

//Export all userrouters from here
module.exports = router;