'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuizAttempt extends Model {
    static associate(models) {
      QuizAttempt.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      QuizAttempt.belongsTo(models.Quiz, {
        foreignKey: 'quiz_id',
      });
    }
  }
  QuizAttempt.init({
    user_id: DataTypes.INTEGER,
    quiz_id: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    correct_answers: DataTypes.INTEGER,
    incorrect_answers: DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'QuizAttempt',
    tableName: 'quiz_attempts',
    underscored: true
  });
  return QuizAttempt;
};
