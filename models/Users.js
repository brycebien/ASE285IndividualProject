const mongoose = require('mongoose');
const crypto = require('crypto');

const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

usersSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};


module.exports = mongoose.model('Users', usersSchema);