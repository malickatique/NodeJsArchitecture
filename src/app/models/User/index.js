const mongoose = require('mongoose');
const schema = require('./schema');

const User = mongoose.model('User', schema);
module.exports = User;
