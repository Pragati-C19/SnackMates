const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const cors = require("cors");

// Enable CORS for all routes
app.use(cors());
app.options('*', cors());

// Enable CORS for specific origins
// app.use(cors({ origin: 'http://127.0.0.1:3000' }));

// Parse JSON bodies
app.use(bodyParser.json());

// Import all user routers here
const userRouter = require("./routes/auth");

// Import all menu routers here
const menuRouter = require("./routes/menus");

// Import all restaurants routers here
const restaurantsRouter = require("./routes/restaurants");

// Import all favorites routers here
const favoritesRouter = require("./routes/favorites");

// Import all cart routers here
const cartRouter = require("./routes/cart");

// Routers for http://localhost:4000/auth
app.use("/auth", userRouter);

// Routers for http://localhost:4000/menus
app.use("/menus", menuRouter);

// Routers for http://localhost:4000/restaurants
app.use("/restaurants", restaurantsRouter);

// Routers for http://localhost:4000/favorites
app.use("/favorites", favoritesRouter);

// Routers for http://localhost:4000/cart
app.use("/cart", cartRouter);

app.listen(port, () => {
  console.log(`Event-Checker app listening on port ${port}`);
});
