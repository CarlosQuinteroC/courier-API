const { Router } = require('express');
const UserService = require('../services/userService');
const AuthUtilities = require('../utilities/auth');

const userController = Router();

userController.post('/', async (request, response) => {
  try {
    const user = request.body;
    user.password = await AuthUtilities.generateHash(user.password);
    const resultService = await UserService.createUser(user);
    response.send(resultService);
  } catch (error) {
    response
      .status(500)
      .send({ message: 'Error when try created user', error: error.message });
  }
});

userController.get('/:id', async (request, response) => {
  try {
    const userId = request.params.id;
    const resultService = await UserService.getUserById(userId);
    response.send(resultService);
  } catch (error) {
    response
      .status(500)
      .send({ message: 'Error when try get user by id', error: error });
  }
});

userController.put('/:id', async (request, response) => {
  try {
    const userId = request.params.id;
    const user = request.body;
    const resultService = await UserService.updateUser(userId, user);
    response.send(resultService);
  } catch (error) {
    response
      .status(500)
      .send({ message: 'Error when try update user by id', error: error });
  }
});

userController.delete('/:id', async (request, response) => {
  try {
    const userId = request.params.id;
    const resultService = await UserService.deleteUser(userId);
    response.send(resultService);
  } catch (error) {
    response
      .status(500)
      .send({ message: 'Error when try delete user by id', error: error });
  }
});

userController.get('/', async (request, response) => {
  try {
    const resultService = await UserService.getUsers();
    response.send(resultService);
  } catch (error) {
    response
      .status(500)
      .send({ message: 'Error when try get user list of users', error: error });
  }
});

module.exports = userController;
