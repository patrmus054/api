const Router = require("express");
const controllers = require("./food.controllers");

const router = Router();

router
  .route("/")
  .get(controllers.getOne)
  .post(controllers.createOne);

router
  .route("/:id")
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne);

module.exports = router;
