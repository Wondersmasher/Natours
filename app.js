const express = require('express');
const app = express();
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

app.use(express.json());

// Mounting Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// Server Start
module.exports = app;
