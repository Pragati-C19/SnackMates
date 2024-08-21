//All request and response for restaurants API wrote here

// DB Connection
const db = require("../database/db-connection");

const getRestaurantMenu = (req, res) => {
  const restaurantId = req.params.restaurant_id;
  console.log(`[DEBUG] Restaurant ID received: ${restaurantId}`);

  const getRestaurantMenuQuery = `
      SELECT menu_table.*
      FROM menu_table
      INNER JOIN restaurant_table ON menu_table.restaurant_id = restaurant_table.restaurant_id
      WHERE restaurant_table.restaurant_id = ?`;

  db.query(getRestaurantMenuQuery, [restaurantId], (error, results) => {
    if (error) {
      console.error("Error while fetching Restaurant's Menu:", error);
      res
        .status(500)
        .json({ statusCode: 500, error: "Failed to fetch Restaurant's Menu" });
    } else {
      if (results.length === 0) {
        res
          .status(404)
          .json({
            statusCode: 404,
            error: "Menu not found for the restaurant",
          });
      } else {
        res.status(200).json({ statusCode: 200, data: results });
        console.log("[INFO] Restaurant Menu: ", results);
      }
    }
  });
};

const getRestaurants = (req, res) => {
  const getRestaurantsQuery = "SELECT * FROM restaurant_table";

  db.query(getRestaurantsQuery, (error, results) => {
    if (error) {
      console.error("Error while fetching all restaurants:", error);
      res
        .status(500)
        .json({ statusCode: 500, error: "Failed to fetch Restaurants" });
    } else {
      res.status(200).json({ statusCode: 200, data: results });
      console.log("[INFO] All Restaurants: ", results);
    }
  });
};

module.exports = { getRestaurantMenu, getRestaurants };
