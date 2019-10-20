const router = require("express").Router();
const registrationController = require("../../controllers/registrationController");

// '/api/register'
router.route("/").post(registrationController.register);

module.exports = router;
