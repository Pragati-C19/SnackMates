const jwt = require("jsonwebtoken");

/*
    Token is going to come from header(Authorization)
    authorization header format was "Bearer TOKEN"
    We can directly use token instead of adding Bearer
*/
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader;

  const emptyValues = ["", null, undefined];

  // Check if the user is authenticated
  if (emptyValues.includes(token)) {
    res.status(401).json({ statusCode: 401, statusMsg: "Unauthorized" });
  } else {
    // If we have a token we need to verify that token
    // This user_id is used in mysql table
    jwt.verify(token, process.env.JWT_SECRET, (err, user_id) => {
      if (err) return res.status(403).send("You Don't have access");
      req.user_id = user_id;
      next(); // Continue to the next middleware or route handler
    });
  }
}

module.exports = { authenticateToken };
