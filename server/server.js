'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
//logs requests to server
const morgan = require('morgan');

const app = express();

//only in development show logs of server requests
app.use(morgan('dev'));
app.use(bodyParser.json());

//next means go onto the next middleware (keep on going to app.use('/api'...))
app.use((req, res, next) => {
  res.header("Access-Controll-Allow-Origin", "*");
  res.header("Access-Controll-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//how do same parameters ('/api') return different files?
app.use('/api', require('./routes/test'));
app.use('/api', require('./routes/stories'));
app.use('/api', require('./routes/police'));

//use the dist folder
app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log('listening on port ', port);
});

module.exports = app;
