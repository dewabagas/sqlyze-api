'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LearningMaterial extends Model {
    static associate(models) {
      LearningMaterial.hasMany(models.Podcast, {
        foreignKey: 'material_id',
      });
      LearningMaterial.hasMany(models.Video, {
        foreignKey: 'material_id',
      });
      LearningMaterial.hasMany(models.LearningPresentation, {
        foreignKey: 'material_id',
      });
      LearningMaterial.hasMany(models.LearningDocument, {
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
    tableName: 'learning_materials',
    underscored: true
  });
  return LearningMaterial;
};
