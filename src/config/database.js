const mongoose = require("mongoose");

const connectionURL = "mongodb://127.0.0.1:27017";
const database = "vaultspay-db";

mongoose.connect(connectionURL+"/"+database);
module.exports = mongoose;