const User = require('../models/user');
const CrudRepository = require('./crud-repository');

class UserRepository extends CrudRepository{

    constructor(){
        super(User);
    }

    async findUserBy(data){
        try {
            const user = await User.findOne(data);
            return user;
        } catch (error) {
            console.log('something went wrong in user repository');
            throw error;
        }
    }
}

module.exports = UserRepository;