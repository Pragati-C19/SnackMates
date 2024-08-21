const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");

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

// Routers for http://localhost:4000/auth
app.use("/auth", userRouter);

// Routers for http://localhost:4000/menus
app.use("/menus", menuRouter);

// Routers for http://localhost:4000/restaurants
app.use("/restaurants", restaurantsRouter);

// Routers for http://localhost:4000/favorites
app.use("/favorites", favoritesRouter);

app.listen(port, () => {
  console.log(`Event-Checker app listening on port ${port}`);
});
