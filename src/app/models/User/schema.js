const { Schema } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
    },
});

module.exports = schema;
