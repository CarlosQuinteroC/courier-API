const express = require('express');
const debug = require('debug');

// Controllers
const authController = require('./controllers/authController');

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

module.exports = app;
