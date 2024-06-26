const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);

router.route("/:movieId").get(controller.read).all(methodNotAllowed);

router
  .route("/:movieId/theaters")
  .get(controller.readTheaters)
  .all(methodNotAllowed);

router
  .route("/:movieId/reviews")
  .get(controller.readReviews)
  .all(methodNotAllowed);

router.route("/:movieId/critics").all((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

module.exports = router;
