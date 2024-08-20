//All request and response for restaurants API wrote here

//DB Connection
const db = require("../database/db-connection");

const getRestaurantMenu = (req, res) =>{

}

const getRestaurants = (req,res) =>{
    const getRestaurantsQuery = "SELECT * FROM restaurant_table";

    db.query(getRestaurantsQuery, (error, results) => {
      if (error) {
        console.error("Error while fetching all restaurants:", error);
        res.status(500).json({ statusCode: 500, error: "Failed to fetch Restaurants" });
      } else {
        res.status(200).json({ statusCode: 200, data: results });
        console.log("[INFO] All Restaurants: ", results);
      }
    });
}

module.exports = {getRestaurantMenu,getRestaurants}