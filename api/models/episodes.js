"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Episodes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Episodes.belongsToMany(models.Playlists, {
        through: models.PlaylistEpisode,
      });
      Episodes.belongsToMany(models.Users, { through: models.Records });
    }
  }
  Episodes.init(
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Episodes",
      underscored: true,
    }
  );
  return Episodes;
};
