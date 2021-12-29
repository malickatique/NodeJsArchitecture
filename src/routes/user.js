const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
    res.send("Test!");
});

module.exports = router;