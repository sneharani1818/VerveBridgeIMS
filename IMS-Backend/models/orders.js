const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    Cname:{
        require:true,
        type: String
    },
    product:{
        require:true,
        type: String
    },
    qty:{
        require:true,
        type: Number
    }
}, {timestamps: true});

const orderM = mongoose.model("order", orderSchema);

module.exports = orderM;