const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name:{
        require:true,
        type: String
    },
    Email:{
        require:true,
        type: String,
        unique:true
    },
    ConatactNo:{
        require:true,
        type: Number
    },
    address:{
        default: "India",
        type: String
    }
}, {timestamps: true});

const userM = mongoose.model("user", userSchema);

module.exports = userM;