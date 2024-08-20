//All request and response for menu API wrote here

//DB Connection
const db = require("../database/db-connection");

/*

This query retrieves the favorite items for a specific user along with their associated menu details.
-- 1. SELECT favorite_table.*, menu_table.* 
--    - Fetches all columns from both favorite_table and menu_table.
-- 2. FROM favorite_table
--    - Specifies the primary table (favorite_table) for the query.
-- 3. INNER JOIN menu_table ON favorite_table.menu_id = menu_table.menu_id
--    - Joins menu_table based on the matching menu_id in both tables.
--    - Ensures only rows with matching menu_id in both tables are returned.
-- 4. WHERE favorite_table.user_id = ?
--    - Filters the results to only include favorites for the specified user_id.

*/
const getFavorites = (req, res) => {
  const userId = req.params.user_id;
  const getFavoritesQuery = `
    SELECT favorite_table.*, menu_table.*
    FROM favorite_table
    INNER JOIN menu_table ON favorite_table.menu_id = menu_table.menu_id
    WHERE favorite_table.user_id = ?`;

  db.query(getFavoritesQuery, [userId], (error, results) => {
    if (error) {
      console.error("Error while fetching favorites:", error);
      res
        .status(500)
        .json({ statusCode: 500, error: "Failed to fetch favorites" });
    } else {
      if (results.length === 0) {
        res
          .status(404)
          .json({ statusCode: 404, error: "No favorites found for the user" });
      } else {
        res.status(200).json({ statusCode: 200, data: results });
        console.log("[INFO] User's Favorites: ", results);
      }
    }
  });
};

const addFavorites = (req, res) => {
  const userId = req.params.user_id;
  const { menu_id } = req.body;

  const addFavoriteQuery = `
    INSERT INTO favorite_table (user_id, menu_id, created_at)
    VALUES (?, ?, NOW())`;

  db.query(addFavoriteQuery, [userId, menu_id], (error, results) => {
    if (error) {
      console.error("Error while adding to favorites:", error);
      res
        .status(500)
        .json({ statusCode: 500, error: "Failed to add to favorites" });
    } else {
      res
        .status(201)
        .json({ statusCode: 201, message: "Added to favorites successfully" });
      console.log("[INFO] Favorite added: ", results);
    }
  });
};

const deleteFavorite = (req, res) => {};

module.exports = { getFavorites, addFavorites, deleteFavorite };
