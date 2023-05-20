'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    nis: DataTypes.STRING,
    password: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    class_id: DataTypes.INTEGER,
    profile_image: DataTypes.STRING,
    msisdn: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    underscored: true
  });
  return User;
};