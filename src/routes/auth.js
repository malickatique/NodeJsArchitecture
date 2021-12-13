const express = require("express");
const authenticated = require("../middleware/authenticated");
var otpController = require('../controllers/auth/otpController');

const router = express.Router();

router.get("/auth", authenticated, otpController.sendOtp);

module.exports = router;