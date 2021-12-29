const express = require("express");

const router = express.Router();

router.get("/test3", (req, res) => {
    res.send("Test you3!");
});

router.get("/test", (req, res) => {
    res.send(" Errors ");
});

module.exports = router;