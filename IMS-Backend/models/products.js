const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Name:{
        require:true,
        type: String
    },
    Desc:{
        type: String,
    },
    Availqty:{
        require:true,
        type: Number
    },
    price:{
        require:true,
        type: Number
    }
}, {timestamps: true});

const productM = mongoose.model("product", productSchema);

module.exports = productM;