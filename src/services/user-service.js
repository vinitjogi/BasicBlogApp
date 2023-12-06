const UserRepository = require("../repository/user-repository")


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
            throw error;
        }
    }
    async get (id){
        try {
            const user = await this.userRepository.get(id);
            console.log(user);
            return user;
        } catch (error) {
            console.log('something went wrong in user service ');
            throw error;
        }
    }
    async getUserByEmail(email){
        try {
            const user = await this.userRepository.getUserByEmail(email);
            return user;
        } catch (error) {
            console.log('something went wrong in user service ');
            throw error;
        }
    }
    async update(data, id){
        try {
            const user = await this.userRepository.update(data, id);
            return user;
        } catch (error) {
            console.log('something went wrong in user service ');
            throw error;
        }
    }

    async delete(id){
        try {
            await this.userRepository.destroy(id);
            return true;
        } catch (error) {
            console.log('something went wrong in user service ');
            throw error;
        }
    }
}

module.exports = UserService