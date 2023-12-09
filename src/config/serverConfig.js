const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const saltRounds = 10
dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    DB_URL : process.env.DB_URL,
    SALT : bcrypt.genSaltSync(saltRounds),
}