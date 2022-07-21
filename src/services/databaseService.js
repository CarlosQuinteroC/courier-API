const mongoose = require('mongoose');
const debug = require('debug');

//logger
const logger = debug('courier-api:DatabaseService');

class DatabaseService {
  static async connection() {
    try {
      return mongoose.connect(process.env.MONGO_DB_URL, (error, result) => {
        if (!error) logger('database conected successfull');
      });
    } catch (error) {
      logger('error when try conected successfull');
      throw new Error(error);
    }
  }
}

module.exports = DatabaseService;
