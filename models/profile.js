'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
    }
  }
  Profile.init({
    user_id: DataTypes.INTEGER,
    full_name: DataTypes.STRING,
    nis: DataTypes.STRING,
    email: DataTypes.STRING,
    msisdn: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    gender: DataTypes.STRING,
    profile_image_url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Profile',
    tableName: 'profiles',
    underscored: true
  });
  return Profile;
};
