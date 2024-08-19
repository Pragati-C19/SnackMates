const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");

// Parse JSON bodies
app.use(bodyParser.json());

//import all user routers here
const userRouter = require("./routes/auth");

//import all menu routers here
const menuRouter = require("./routes/menus");

//import all restaurants routers here
const restaurantsRouter = require("./routes/restaurants");

//routers for http://localhost:4000/auth
app.use("/auth", userRouter);

//routers for http://localhost:4000/menus
app.use("/menus", menuRouter);

//routers for http://localhost:4000/restaurants
app.use("/restaurants", restaurantsRouter);

app.listen(port, () => {
  console.log(`Event-Checker app listening on port ${port}`);
});
