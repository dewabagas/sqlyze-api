'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    static associate(models) {
      Video.belongsTo(models.LearningMaterial, {
        foreignKey: 'material_id',
      });
    }
  }
  Video.init({
    material_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Video',
    tableName: 'videos'
  });
  return Video;
};
