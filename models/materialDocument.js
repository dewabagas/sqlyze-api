'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaterialDocument extends Model {
    static associate(models) {
      MaterialDocument.belongsTo(models.LearningMaterial, {
        foreignKey: 'material_id',
      });
    }
  }
  MaterialDocument.init({
    material_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    document_type: DataTypes.STRING,
    url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'MaterialDocument',
    tableName: 'material_documents'
  });
  return MaterialDocument;
};
