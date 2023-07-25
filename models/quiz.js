'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    static associate(models) {
      Quiz.belongsTo(models.LearningMaterial, {
        foreignKey: 'material_id',
      });
      Quiz.hasMany(models.QuizAttempt, {
        foreignKey: 'quiz_id',
      });
      Quiz.hasMany(models.QuizQuestion, {
        foreignKey: 'quiz_id',
      });
    }
  }
  Quiz.init({
    material_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    is_final_exam: DataTypes.BOOLEAN,
    duration: DataTypes.TIME,
    passing_score: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Quiz',
    tableName: 'quizzes',
    underscored: true
  });
  return Quiz;
};
