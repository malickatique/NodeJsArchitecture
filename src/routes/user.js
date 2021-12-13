const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
    res.send("Fuck you!");
});

module.exports = router;