const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");

// Parse JSON bodies
app.use(bodyParser.json());

//import all user routers here
const userRouter = require("./routes/users");

//import all menu routers here
const menuRouter = require("./routes/menus");

//import all restaurants routers here
const restaurantsRouter = require("./routes/restaurants");

//import all favorite routers here
const favoriteRouter = require("./routes/favorites");

app.listen(port, () => {
  console.log(`Event-Checker app listening on port ${port}`);
});
