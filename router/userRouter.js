const express = require('express');
const router = express.Router();
const userModule = require('../modules/userModule');
const auth = require("../modules/authModule");

router.get('/get', userModule.getuser);

router.get('/getposts', userModule.getPosts);

router.post('/create', userModule.createuser);

router.put('/update/:userId', auth.authorizeUser, userModule.updateuser)

router.delete('/delete/:userId',auth.authorizeUser,  userModule.deleteuser);

module.exports = router;