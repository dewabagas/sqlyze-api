'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LearningMaterial extends Model {
    static associate(models) {
      console.log('moels : ')
      console.log(models)
      LearningMaterial.hasOne(models.Video, {
        foreignKey: 'material_id',
        as: 'video'
      });
      LearningMaterial.hasOne(models.Podcast, {
        foreignKey: 'material_id',
        as: 'podcast'
      });
      LearningMaterial.hasOne(models.LearningDocument, {
        foreignKey: 'material_id',
        as: 'learning_document'
      });
      LearningMaterial.hasOne(models.LearningPresentation, {
        foreignKey: 'material_id',
        as: 'learning_presentation'
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
