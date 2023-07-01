'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CumulativeLearningAnalytics extends Model {
    static associate(models) {
      CumulativeLearningAnalytics.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
    }
  }
  CumulativeLearningAnalytics.init({
    user_id: DataTypes.INTEGER,
    total_quizzes_taken: DataTypes.INTEGER,
    total_score: DataTypes.INTEGER,
    total_correct_answers: DataTypes.INTEGER,
    total_incorrect_answers: DataTypes.INTEGER,
    total_duration: DataTypes.TIME,
  }, {
    sequelize,
    modelName: 'CumulativeLearningAnalytics',
    tableName: 'cumulative_learning_analytics',
    underscored: true
  });
  return CumulativeLearningAnalytics;
};
