'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Profile, {
        foreignKey: 'user_id',
      });
      User.hasOne(models.CumulativeLearningAnalytics, {
        foreignKey: 'user_id',
      });
      User.hasMany(models.DiscussionThread, {
        foreignKey: 'user_id',
      });
      User.hasMany(models.ThreadComment, {
        foreignKey: 'user_id',
      });
      User.hasMany(models.QuizAttempt, {
        foreignKey: 'user_id',
      });
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscored: true
  });
  return User;
};
