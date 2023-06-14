const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
    }, {
        //automatically detect time when created/modified
    timestamps: true
})

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;