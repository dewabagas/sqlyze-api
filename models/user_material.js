const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class UserMaterial extends Model {
    static associate(models) {
      UserMaterial.belongsTo(models.User, {
        foreignKey: 'user_id',
        targetKey: 'id'
      });
      UserMaterial.belongsTo(models.LearningMaterial, {
        foreignKey: 'material_id',
        targetKey: 'id'
      });
      models.LearningMaterial.belongsToMany(models.User, {
        through: UserMaterial,
        foreignKey: 'material_id',
        otherKey: 'user_id'
      });
      models.User.belongsToMany(models.LearningMaterial, {
        through: UserMaterial,
        foreignKey: 'user_id',
        otherKey: 'material_id'
      });
    }
  }
  UserMaterial.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    material_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    is_unlocked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'UserMaterial',
    tableName: 'user_materials',
    underscored: true,
    uniqueKeys: {
      unique_tag: {
        customIndex: true,
        fields: ['user_id', 'material_id']
      }
    }
  });
  return UserMaterial;
};
