"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Playlists, { as: "playlists" });
      // Users.hasMany(models.Subscriptions)
      Users.belongsToMany(models.Podcasts, {
        through: models.Subscriptions,
        as: "subscriptions",
      });
      // Users.belongsToMany(models.Episodes, { through: models.Records, as: 'records' })
      Users.hasMany(models.Records, { as: "playedRecords" });
    }
  }
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      username: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(128),
        allowNull: true,
        unique: true,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("NOW()"),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        onUpdate: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      modelName: "Users",
      underscored: true,
    }
  );
  return Users;
};
