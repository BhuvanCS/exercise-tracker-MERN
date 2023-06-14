const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username already exists"],
        trim: true,
        minLength: 3
    }
    }, {
        //automatically detect time when created/modified
    timestamps: true
})

const User = mongoose.model("User", userSchema);

module.exports = User;