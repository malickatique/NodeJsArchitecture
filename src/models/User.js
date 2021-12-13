const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number
    }
});

userSchema.methods = 
{
    test: (err, data) => {

    },
    test2: ()=>{}
};

const User = mongoose.model("User", userSchema);

module.exports = User;