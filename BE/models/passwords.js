"use strict";
const { Model } = require("sequelize");
const users = require("./users");
module.exports = (sequelize, DataTypes) => {
  class Passwords extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Passwords.belongsTo(models.Users);
    }
  }
  Passwords.init(
    {
      password: DataTypes.STRING,
      salt: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Passwords",
      underscored: true,
    }
  );
  return Passwords;
};
