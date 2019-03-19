const router = require("express").Router();
const food = require("./api_food");
const resturants = require("./api_resturants");
const accounts = require("./api_account");


router.use("/foods", food);

router.use("/user", accounts);

// router.use("/signUp", signup);

// router.use("login", login)






module.exports = router;