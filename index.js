const express = require('express');
const mongo = require('./connect');
const cors = require('cors');
const dotenv = require('dotenv');
const employee = require('./router/employeeRouter');
const product = require('./router/productRouter');
const register = require('./router/registerRouter');
const auth = require("./modules/authModule");

dotenv.config();
mongo.connect();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/register', register);
app.use('/', auth.authenticateUser);
app.use('/employees', employee);
app.use('/product', product);
app.listen(process.env.PORT);