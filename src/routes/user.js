const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
    res.send(" Change this text to ' I was here. ' ");
});

module.exports = router;