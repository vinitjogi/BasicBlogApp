const UserService = require("../services/user-service");

const userService = new UserService();

const createUser = async (req, res) => {
    try {
       const {email, password, username} = req.body
        const response = await userService.create({email, password, username});
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
        const id = req.params.id;
        const response = await userService.get(id);
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
        const id = req.params.id;
        await userService.delete(id);
        return res.status(204).json({ 
            success : true,
            message : 'Successfully deleted ',
            err : {}
        });
    } catch (error) {
        throw {error};
    }
}

const signin = async (req, res) => {
    try {
       const {email, password} = req.body
        const response = await userService.signin({email, password});
        return res.status(200).json({
            data : response, 
            success : true,
            message : 'Successfully logged in',
            err : {}
        });
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'incorrect credentials',
            err: error
        });
    }
}


module.exports = {
    createUser, getUser, deleteUser, signin
}