const express = require("express");

const router = express.Router();

router.get("/test3", (req, res) => {
    res.send("Fuck you3!");
});

module.exports = router;