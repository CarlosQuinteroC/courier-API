const debug = require('debug');
const authModel = require('../model/authModel');
const AuthUtilities = require('../utilities/auth');

//logger
const logger = debug('courier-api:Auth');

class AuthService {
  static async authenticateUser(email, password) {
    const userMatch = await authModel.users.find((o) => o.email === email);
    //logger(userMatch);
    if (userMatch) {
      if (await AuthUtilities.compareHash(password, userMatch.password)) {
        const payload = {
          name: userMatch.name,
          user: userMatch.user,
          email: userMatch.email,
        };
        //logger(payload);
        const token = AuthUtilities.signToken(payload, '20m');
        return token;
      } else {
        return 'Credenciales incorrectas';
      }
    } else {
      return 'Credenciales incorrectas';
    }
  }
}

module.exports = AuthService;
