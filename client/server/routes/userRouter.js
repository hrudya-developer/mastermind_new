const express = require('express');
const router = express.Router();
const {userLogin, userRegister} = require('../controller/userController');

router.route('/login').post(userLogin);
router.route('/register').post(userRegister);
 


module.exports = router;