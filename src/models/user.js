const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    names: {
      type: String,
      required: true,
    },
    lastNames: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    status: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: 'users',
    versionKey: false,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
