const Sequelize = require("sequelize");

const sequelize = require('../util/database');

const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Name: Sequelize.STRING,
  email: {
    type: Sequelize.INTEGER,
    unique: true,
  },
  phonenumber: {
    type: Sequelize.INTEGER,
    unique: true,
  },
});

module.exports = User;
