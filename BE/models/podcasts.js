"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Podcasts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Podcasts.belongsToMany(models.Users, {
        through: models.Subscriptions,
        as: "subscribers",
      });
    }
  }
  Podcasts.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Podcasts",
      underscored: true,
    }
  );
  return Podcasts;
};
