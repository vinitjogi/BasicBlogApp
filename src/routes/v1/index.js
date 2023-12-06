const express = require('express');
const router = express.Router();

const {getUser, createUser, deleteUser} = require('../../controllers/user-controller');

router.post('/signup', createUser);
router.get('/users', getUser);
router.delete('/delete', deleteUser);

module.exports = router;


