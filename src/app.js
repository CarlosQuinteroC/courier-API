const express = require('express');
const debug = require('debug');

// Controllers
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');

// Logger
const logger = debug('courier-api:app');
const app = express();

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (request, response) => {
  logger('Servidor funcionando');
  response.send('Servidor arriba - Hola Mundo');
});

app.use('/auth', authController);
app.use('/users', userController);

module.exports = app;
