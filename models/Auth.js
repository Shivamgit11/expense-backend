const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Auth = sequelize.define("auth", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    unique: true,
  },
  isPremiumUser: Sequelize.BOOLEAN,
});

module.exports = Auth;
