const router = require("express").Router(); // need Router({ mergeParams: true}); ??
const controller = require("./dishes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
    .route("/:dishId")
    .get(controller.read)
    .put(controller.update)

router
    .route("/")
    .get(controller.list)
    .post(controller.create)

module.exports = router;
