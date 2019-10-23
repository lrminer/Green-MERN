const router = require("express").Router();
const budgetsController = require("../../controllers/budgetsController");

// '/api/budgets'
router
  .route("/")
  .get(budgetsController.findAll)
  .post(budgetsController.create);
 
// '/api/budgets/:id'
router
  .route("/:id")
  .get(budgetsController.findById)
  .put(budgetsController.update)
  .delete(budgetsController.remove);

module.exports = router;    
   