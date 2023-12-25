const UserService = require("../services/user-service");

const userService = new UserService();

const isAuth = async(req, res, next) => {
    try {
        const token = req.headers['x-access-token'];
        const response = userService.verifyJwtToken(token);
        req.user = response;
        return res.status(201).json({
            data : response,
            success : true,
            message : 'user is authenticated and token is valid',
            err : {}
        });
        
    } catch (error) {
        return res.status(401).json({
            data : {},
            success : false,
            message : 'unauthorised request',
            err : error
        });
    }    
}

module.exports = {
    isAuth
}