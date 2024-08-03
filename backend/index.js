const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { db } = require('./db');
const userRouter = require('./routers/user');
app.use(cors());
app.use(bodyParser.json());
app.use('/user', userRouter);


app.listen(8080, () => {
  console.log('Server is running on port 8080');
});