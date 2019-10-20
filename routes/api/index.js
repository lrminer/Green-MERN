const router = require("express").Router();
const userRoutes = require("./users");
const budgetRoutes = require("./budgets");
const loginRoutes = require('./login')

router.use("/users", userRoutes);
router.use("/budgets", budgetRoutes);
router.use('/login', loginRoutes)

module.exports = router;
