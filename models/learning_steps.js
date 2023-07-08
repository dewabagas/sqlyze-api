'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LearningStep extends Model {
    static associate(models) {
      LearningStep.belongsTo(models.LearningMaterial, {
        foreignKey: 'material_id',
      });
    }
  }
  LearningStep.init({
    material_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'LearningStep',
    tableName: 'learning_steps',
    underscored: true
  });
  return LearningStep;
};
