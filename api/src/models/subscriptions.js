'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Subscriptions extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // models.Users.belongsToMany(models.Podcasts, { through: Subscriptions });
            // models.Podcasts.belongsToMany(models.Users, { through: Subscriptions });
            // Subscriptions.(models.Podcasts);
            // Subscriptions.belongsTo(models.Users)
        }
    }
    Subscriptions.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            podcastId: DataTypes.STRING,
            userId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Subscriptions',
            underscored: true,
        }
    );
    return Subscriptions;
};
