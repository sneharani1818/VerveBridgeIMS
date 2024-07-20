const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    
}, { timestamps: true });

const AdminM = mongoose.model('Admin', AdminSchema);

module.exports = AdminM;