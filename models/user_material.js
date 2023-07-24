// UserMaterial.js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserMaterial extends Model {
    static associate(models) {
      // define association here
    }
  }
  UserMaterial.init({
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    materialId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    isUnlocked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'UserMaterial',
    tableName: 'user_materials',
    underscored: true
  });
  return UserMaterial;
};
