'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LearningDocument extends Model {
    static associate(models) {
      LearningDocument.belongsTo(models.LearningMaterial, {
        foreignKey: 'material_id',
      });
    }
  }
  LearningDocument.init({
    material_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    document_type: DataTypes.STRING,
    url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'LearningDocument',
    tableName: 'learning_documents',
    underscored: true
  });
  return LearningDocument;
};
