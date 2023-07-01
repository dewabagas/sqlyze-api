'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuizAnswer extends Model {
    static associate(models) {
      QuizAnswer.belongsTo(models.QuizQuestion, {
        foreignKey: 'question_id',
      });
    }
  }
  QuizAnswer.init({
    question_id: DataTypes.INTEGER,
    answer: DataTypes.TEXT,
    is_correct: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'QuizAnswer',
    tableName: 'quiz_answers',
    underscored: true
  });
  return QuizAnswer;
};
