const router = require("express").Router();
const budgetsController = require("../../controllers/budgetsController");

router
  .route("/")
  .get(budgetsController.findAll)
  .post(budgetsController.create);
router
  .route("/:id")
  .get(budgetsController.findById)
  .put(budgetsController.update)
  .delete(budgetsController.remove);

module.exports = router;
