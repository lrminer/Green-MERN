const router = require("express").Router();
const userRoutes = require("./users");
const budgetRoutes = require("./budgets");
const loginRoutes = require("./login");
const registrationRoutes = require("./registration");

// /api/users
router.use("/users", userRoutes);

// /api/budgets
router.use("/budgets", budgetRoutes);

// /api/login
router.use("/login", loginRoutes);

// /api/register
router.use("/register", registrationRoutes);

module.exports = router;
