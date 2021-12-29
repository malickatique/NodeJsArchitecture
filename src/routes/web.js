const express = require("express");
var homeController = require('../controllers/home/homeController');

const router = express.Router();

router.get("/", homeController.home);

router.get("/test", (req, res) => {
    res.send(" Change this text to ' I was here. ' ");
});

module.exports = router;