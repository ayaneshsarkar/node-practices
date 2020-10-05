const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const toursRouter = require('./routes/tourRoutes');
const usersRouter = require('./routes/userRoutes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

// Custom Middleware
app.use((req, res, next) => {
  console.log('Middleware running ✔');
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', toursRouter);
app.use('/api/v1/users', usersRouter);

// Home
app.get('/', (req, res) => res.status(200).json({ message: 'OK' }));

module.exports = app;

