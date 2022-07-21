const User = require('../models/user');

class UserService {
  static async createUser(user) {
    try {
      const userResult = await User.create(user);
      return `Usuario creado correctamente con el id ${userResult._id}`;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getUserById(id) {
    try {
      const userFind = await User.findById(id, {
        names: 1,
        lastNames: 1,
        email: 1,
        status: 1,
      });
      return userFind;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async updateUser(id, user) {
    try {
      await User.findByIdAndUpdate(id, user);
      return 'Usuario actualizado correctamente';
    } catch (error) {
      throw new Error(error);
    }
  }

  static async deleteUser(id) {
    try {
      await User.findByIdAndUpdate(id, { isDeleted: true });
      return 'Usuario eliminado correctamente';
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getUsers() {
    try {
      const usersList = await User.find(
        { status: true, isDeleted: false },
        {
          names: 1,
          lastNames: 1,
          email: 1,
          status: 1,
        }
      );
      return { rows: usersList, total: usersList.length };
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserService;
