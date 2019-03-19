const router = require("express").Router();
const controller = require("../../controller/controller");

// /foods
router.route("/")
    .get(controller.getAll);

// /foods/:name
router.route("/:name")
    .get(controller.SearchItems);

// /foods/:id/:restaurant
router.route("/:id/:resturant")
    .get(controller.getItem);


router.route("/:category")
    .get(controller.getCategoryItems);




module.exports = router;
