const auth = require("./auth");
const user = require("./user");
const admin = require("./admin");
const web = require("./web");

const router = [user, auth, admin, web];

module.exports = router;