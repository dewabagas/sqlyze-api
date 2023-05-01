'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Podcast extends Model {
    static associate(models) {
      Podcast.belongsTo(models.LearningMaterial, {
        foreignKey: 'material_id',
      });
    }
  }
  Podcast.init({
    material_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Podcast',
    tableName: 'podcasts'
  });
  return Podcast;
};
