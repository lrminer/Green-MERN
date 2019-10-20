const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// '/api/login'
router.route("/").post(loginController.login);

module.exports = router;
