//All request and response for menu API wrote here

//DB Connection
const db = require("../database/db-connection");

const getMenu = (req, res) =>{
//Extract ID from request parameter
  const menuId = req.params.menu_id;

  //sql query to find menu_id
  const getMenuQuery = "SELECT * FROM menu_table WHERE menu_id = ?";

  db.query(getMenuQuery, [menuId], (error, results) => {
    if (error) {
        console.error("Error while Fetching Menu by ID:", error);
        res.status(500).json({ statusCode: 500, error: "Failed to Fetch Menu" });
    } else {
        if (results.length === 0) {
            res.status(404).json({ statusCode: 404, error: "Menu not found" });
        } else {
            res.status(200).json({ statusCode: 200, data: results[0] });
            console.log("[INFO] Menu details of specific ID: ", results)
        }
    }
    });
  }


const getMenus = (req,res) =>{
    const getMenusquery = "SELECT * FROM menu_table";
    db.query(getMenusquery, (error, results) => {
        if (error) {
            console.error("Error while Fetching All Menus:", error);
            res.status(500).json({ statusCode: 500, error: "Failed to Fetch menus" });
        } else {
            res.status(200).json({ statusCode: 200, data: results });
            console.log("[INFO] All Menu List: ", results)
        }
    });
}

const getMenuByType = (req,res) =>{

}

module.exports = {getMenu,getMenus, getMenuByType}