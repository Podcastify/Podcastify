'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Playlists extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Playlists.belongsTo(models.Users, {as: 'playlists'});
            Playlists.belongsToMany(models.Episodes, {
                through: models.PlaylistEpisode,
            });
        }
    }
    Playlists.init(
        {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            userId: DataTypes.INTEGER,
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Playlists',
            underscored: true,
        }
    );
    return Playlists;
};
