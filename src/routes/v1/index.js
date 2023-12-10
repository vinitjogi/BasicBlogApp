const express = require('express');
const router = express.Router();

const {getUser, createUser, deleteUser, signin} = require('../../controllers/user-controller');

router.post('/signup', createUser);
router.get('/users/:id', getUser);
router.delete('/deleteuser/:id', deleteUser);


router.post('/signin', signin)

module.exports = router;


