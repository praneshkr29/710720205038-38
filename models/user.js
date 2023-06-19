const mongoose = require('mongoose');
// Userschema spec.
/* name,email,password,date : doc*/

const UserSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    ownerName: {
        type: String,
        required: true,
    },
    ownerEmail: {
        type: String,
        required: true,
        unique: true,
        unique: true,
    },
    accessCode: {
        type: String,
        required: true,
    },
    rollNo: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('User', UserSchema);