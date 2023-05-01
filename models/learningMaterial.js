'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LearningMaterial extends Model {
    static associate(models) {
      LearningMaterial.hasOne(models.Video, {
        foreignKey: 'material_id',
      });
      LearningMaterial.hasOne(models.Podcast, {
        foreignKey: 'material_id',
      });
      LearningMaterial.hasOne(models.MaterialDocument, {
        foreignKey: 'material_id',
      });
    }
  }
  LearningMaterial.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'LearningMaterial',
    tableName: 'learning_materials'
  });
  return LearningMaterial;
};
