const express = require('express');
const router = express.Router();

const {getUser, createUser, deleteUser} = require('../../controllers/user-controller');

router.post('/signup', createUser);
router.get('/users/:id', getUser);
router.delete('/deleteuser/:id', deleteUser);

module.exports = router;


