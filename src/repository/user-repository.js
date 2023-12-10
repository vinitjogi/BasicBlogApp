const User = require('../models/user');
const CrudRepository = require('./crud-repository');

class UserRepository extends CrudRepository{

    constructor(){
        super(User);
    }

    async findUserByEmail(userEmail){
        try {
            const user = await User.findOne({
                email : userEmail
            });
            return user;
        } catch (error) {
            console.log('something went wrong in user repository');
            throw error;
        }
    }
}

module.exports = UserRepository;