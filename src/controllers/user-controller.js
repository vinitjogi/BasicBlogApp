const UserService = require("../services/user-service");


const userService = new UserService();

const createUser = async (req, res) => {
    try {
        const response = await userService.create({
            email : req.body.email,
            password : req.body.password,
            username : req.body.username

        });
        return res.status(201).json({
            data : response, 
            success : true,
            message : 'Successfully created a user',
            err : {}
        });
    } catch (error) {
        throw {error};
    }
}

const getUser = async (req, res) => {
    try {
        console.log(req.query);
        const response = await userService.get(req.query.id);
        return res.status(200).json({
            data : response, 
            success : true,
            message : 'Successfully fetched a user',
            err : {}
        });
    } catch (error) {
        throw {error};
    }
}

const deleteUser = async (req, res) => {
    try {
        await userService.delete(req.query.id);
        return res.status(204).json({ 
            success : true,
            message : 'Successfully deleted ',
            err : {}
        });
    } catch (error) {
        throw {error};
    }
}


module.exports = {
    createUser, getUser, deleteUser
}