'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LearningPresentation extends Model {
    static associate(models) {
      LearningPresentation.belongsTo(models.LearningMaterial, {
        foreignKey: 'material_id',
      });
    }
  }
  LearningPresentation.init({
    material_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    file_url: DataTypes.STRING(1024),
  }, {
    sequelize,
    modelName: 'LearningPresentation',
    tableName: 'learning_presentations',
    underscored: true
  });
  return LearningPresentation;
};
