const router = require("express").Router();
const userRoutes = require("./users");
const budgetRoutes = require("./budgets");
const loginRoutes = require("./login");
const registrationRoutes = require("./registration");

router.use("/users", userRoutes);
router.use("/budgets", budgetRoutes);
router.use("/login", loginRoutes);
router.use("/register", registrationRoutes);

module.exports = router;
