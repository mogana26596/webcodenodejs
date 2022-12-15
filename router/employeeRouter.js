const express = require('express');
const router = express.Router();
const employee = require('../modules/employeeModule');
const auth = require("../modules/authModule");

router.get('/get', employee.getEmployees);

router.get('/getposts', employee.getPosts);

router.post('/create',auth.authorizeUser, employee.createEmployees)

router.put('/update/:employeeId', auth.authorizeUser, employee.updateEmployees)

router.delete('/delete/:employeeId',auth.authorizeUser,  employee.deleteEmployees);

module.exports = router;