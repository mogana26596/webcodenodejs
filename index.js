const express = require('express');
const mongo = require('./connect');
const cors = require('cors');
const dotenv = require('dotenv');
const userRouter = require('./router/userRouter');
const registerRouter = require('./router/registerRouter');
const auth = require("./modules/authModule");

dotenv.config();
mongo.connect();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/register', registerRouter);

app.use("/", auth.authenticateUser);
app.use('/users', userRouter);
app.listen(process.env.PORT);