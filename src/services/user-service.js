const UserRepository = require("../repository/user-repository")
const bcrypt = require('bcrypt');

class UserService {
    
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(userData){
        try {
            const user = await this.userRepository.create(userData);
            return user;
        } catch (error) {
            console.log('something went wrong in user service ');
            console.log(error);
            throw error;
        }
    }
    async get (id){
        try {
            const user = await this.userRepository.get(id);
            return user;
        } catch (error) {
            console.log('something went wrong in user service ');
            console.log(error);
            throw error;
        }
    }
    async update(data, id){
        try {
            const user = await this.userRepository.update(data, id);
            return user;
        } catch (error) {
            console.log('something went wrong in user service ');
            console.log(error);
            throw error;
        }
    }

    async delete(id){
        try {
            await this.userRepository.destroy(id);
            return true;
        } catch (error) {
            console.log('something went wrong in user service ');
            console.log(error);
            throw error;
        }
    }

    async signin(data){
        try {
            const user = await this.userRepository.findUserByEmail(data.email);
            if(!user){
                throw{error : 'no user found'};
            }

            const matchPassword = this.checkPassword(data.password, user.password);
            
            if(!matchPassword){
                throw{error : 'incorrect password'};
            }
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    checkPassword(plainPassword, encryptedPassword){
        try {
            const response = bcrypt.compareSync(plainPassword, encryptedPassword);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
module.exports = UserService;