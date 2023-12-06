const User = require('../models/user');
const CrudRepository = require('./crud-repository');

class UserRepository extends CrudRepository{

    constructor(){
        super(User);
    }

    async getUserByEmail(email){
        const user = await User.findOne(email);
        return user;
    }
}

module.exports = UserRepository;