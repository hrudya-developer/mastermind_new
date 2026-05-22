const express = require('express');
const app = express();
const cors = require('cors');
// app.use(cors());


app.use(cors({
  origin: true,
  credentials: true
}));





app.use(express.urlencoded({extended: true}));
app.use(express.json());

const userRouter = require('./routes/userRouter');

app.use('/api/v1/user', userRouter);






module.exports = app;
