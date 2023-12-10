const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT } = require('../config/serverConfig');
const userSchema = new mongoose.Schema({
    email : {
        type : String,
        unique : true,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    username : {
        type : String,
        required : true,
    }
}, {timestamps : true});

userSchema.pre('save', function encryptPassword(next) {
    // const user = this;
    const hashedPassword = bcrypt.hashSync(this.password, SALT);
    this.password = hashedPassword;
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;