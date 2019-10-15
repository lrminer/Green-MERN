const router = require("express").Router();
const userRoutes = require("./users");
const budgetRoutes = require("./budgets");

router.use("/users", userRoutes);

module.exports = router;
