const router = require("express").Router();
const jwt = require("jsonwebtoken");
const loginController = require("../../controllers/loginController");

// format of token
// authorization : bearer <access_token>

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  // check if bearer is defined

  if (typeof bearerHeader !== "undefined") {
    // split @ the space
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1]; // the token is the second index of the bearer array

    req.token = bearerToken;
    // next middleware
    next();
  } else {
    // forbidden
    res.sendStatus(403);
  }
};

// '/api/login'
router.route("/").post((req, res) => {
  jwt.sign({ user }, "secret", (err, token) => {
    res.json({ token });
  });
});

module.exports = router;
