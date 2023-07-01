'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuizQuestion extends Model {
    static associate(models) {
      QuizQuestion.belongsTo(models.Quiz, {
        foreignKey: 'quiz_id',
      });
      QuizQuestion.hasMany(models.QuizAnswer, {
        foreignKey: 'question_id',
      });
    }
  }
  QuizQuestion.init({
    quiz_id: DataTypes.INTEGER,
    question: DataTypes.TEXT,
    question_type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'QuizQuestion',
    tableName: 'quiz_questions',
    underscored: true
  });
  return QuizQuestion;
};
