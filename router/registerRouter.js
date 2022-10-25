const express = require('express');
const router = express.Router();
const register = require('../modules/registerModule');

router.post('/signup', register.signup);

router.post('/signin', register.signin);

module.exports = router;