const express = require('express');
const router = express.Router();

const {
    getUser, 
    createUser, 
    deleteUser, 
    signin,
    testcode,
} = require('../../controllers/user-controller');

const {isAuth} = require('../../middleware/authentication')
    
router.post('/signup', createUser);
router.get('/users/:id', getUser);
router.delete('/deleteuser/:id', deleteUser);


router.post('/signin', signin)
router.get('/test', isAuth, testcode)

module.exports = router;


