const UserRepository = require("../repository/user-repository")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { JWT_SECRET_KEY } = require('../config/serverConfig');
class UserService {
    
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(userData){
        try {
            const user = await this.userRepository.create(userData);

            // check if username is already taken!
            const existingUser = await this.userRepository.findUserBy({username : userData.username});
            if(existingUser){
                throw{
                    message : 'username already exist'
                }
            }
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
            const user = await this.userRepository.findUserBy({email : data.email});
            if(!user){
                throw{error : 'no user found'};
            }

            const matchPassword = this.checkPassword(data.password, user.password);
            
            if(!matchPassword){
                throw{error : 'incorrect password'};
            }

            const newJwt = this.createJwtToken({
                id : user._id, 
                username : user.username, 
                // email : user.email
            });
            return newJwt;
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

    createJwtToken(user){
        try {
            console.log(user);
            const response = jwt.sign(user, JWT_SECRET_KEY, { expiresIn: '1h' });
            return response;   
        } catch (error) {
            console.log('something went wrong in token creation', error);
            throw error;
        }
    }

    verifyJwtToken(token){
        try {
            const decoded = jwt.verify(token, JWT_SECRET_KEY);
            console.log(decoded);
        } catch (error) {
            if(error.name === "JsonWebTokenError" && error.message === "jwt malformed"){
                throw {
                    error : "token is not valid"
                }
            }
        }
    }
}
module.exports = UserService;