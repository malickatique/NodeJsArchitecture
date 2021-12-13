const express = require("express");
var homeController = require('../controllers/home/homeController');

const router = express.Router();

router.get("/", homeController.home);

module.exports = router;