const mongoose = require('mongoose');
const {DB_URL} = require('../config/serverConfig');

const connect = async() => {
    try {
        await mongoose.connect(DB_URL);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;

//mongodb://0.0.0.0:27017