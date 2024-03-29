'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LearningMaterial extends Model {
    static associate(models) {
      LearningMaterial.hasOne(models.Podcast, {
        foreignKey: 'material_id',
      });
      LearningMaterial.hasOne(models.Video, {
        foreignKey: 'material_id',
      });
      LearningMaterial.hasOne(models.LearningPresentation, {
        foreignKey: 'material_id',
      });
      LearningMaterial.hasOne(models.LearningDocument, {
        foreignKey: 'material_id',
      });
      LearningMaterial.hasMany(models.LearningStep, {
        foreignKey: 'material_id',
      });
      LearningMaterial.belongsToMany(models.User, {
        through: 'UserMaterial',
        foreignKey: 'material_id',
        otherKey: 'user_id'
      });
    }
  }
  LearningMaterial.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    material_type: DataTypes.INTEGER,
    is_locked: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'LearningMaterial',
    tableName: 'learning_materials',
    underscored: true
  });
  return LearningMaterial;
};
