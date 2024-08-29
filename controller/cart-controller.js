// All request and response for cart API are written here
// DB Connection
const db = require("../database/db-connection");

/*
This query retrieves the cart items for a specific user along with their associated menu details.
-- 1. SELECT cart_table.*, menu_table.* 
--    - Fetches all columns from both cart_table and menu_table.
-- 2. FROM cart_table
--    - Specifies the primary table (cart_table) for the query.
-- 3. INNER JOIN menu_table ON cart_table.menu_id = menu_table.menu_id
--    - Joins menu_table based on the matching menu_id in both tables.
--    - Ensures only rows with matching menu_id in both tables are returned.
-- 4. WHERE cart_table.user_id = ?
--    - Filters the results to only include cart items for the specified user_id.
*/
const getCartItems = (req, res) => {
  const userId = req.params.user_id;
  const getCartItemsQuery = `
    SELECT cart_table.*, menu_table.*
    FROM cart_table
    INNER JOIN menu_table ON cart_table.menu_id = menu_table.menu_id
    WHERE cart_table.user_id = ?`;

  db.query(getCartItemsQuery, [userId], (error, results) => {
    if (error) {
      console.error("Error while fetching cart items:", error);
      res
        .status(500)
        .json({ statusCode: 500, error: "Failed to fetch cart items" });
    } else {
      if (results.length === 0) {
        res
          .status(404)
          .json({ statusCode: 404, error: "No cart items found for the user" });
      } else {
        res.status(200).json({ statusCode: 200, data: results });
        console.log("[INFO] User's Cart Items: ", results);
      }
    }
  });
};

const addCartItem = (req, res) => {
  const userId = req.params.user_id;
  const { menu_id } = req.body;

  const addCartItemQuery = `
    INSERT INTO cart_table (user_id, menu_id, created_at)
    VALUES (?, ?, NOW())`;

  db.query(addCartItemQuery, [userId, menu_id], (error, results) => {
    if (error) {
      console.error("Error while adding to cart:", error);
      res.status(500).json({ statusCode: 500, error: "Failed to add to cart" });
    } else {
      res
        .status(201)
        .json({ statusCode: 201, message: "Added to cart successfully" });
      console.log("[INFO] Cart item added: ", results);
    }
  });
};

const deleteCartItem = (req, res) => {
  const userId = req.params.user_id;
  const cartItemId = req.params.cart_id;

  // Debudding : Ensure that the cart_id and user_id are correct
  if (!userId || !cartItemId) {
    return res
      .status(400)
      .json({ statusCode: 400, error: "Missing user_id or cart_id" });
  }

  const deleteCartItemQuery = `
    DELETE FROM cart_table 
    WHERE user_id = ? AND cart_id = ?`;

  db.query(deleteCartItemQuery, [userId, cartItemId], (error, results) => {
    if (error) {
      console.error("Error while deleting cart item:", error);
      res
        .status(500)
        .json({ statusCode: 500, error: "Failed to delete cart item" });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ statusCode: 404, error: "Cart item not found" });
    } else {
      res
        .status(200)
        .json({ statusCode: 200, message: "Cart item deleted successfully" });
      console.log("[INFO] Cart item deleted: ", results);
    }
  });
};

module.exports = { getCartItems, addCartItem, deleteCartItem };
