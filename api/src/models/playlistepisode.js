'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PlaylistEpisode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    PlaylistEpisode.init(
        {
            id: {
                primaryKey: true,
                type: DataTypes.STRING,
            },
            playlistId: DataTypes.INTEGER,
            episodeId: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'PlaylistEpisode',
            underscored: true,
            tableName: 'playlist_episode',
        }
    );
    return PlaylistEpisode;
};
