'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cumulative_learning_analytics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      total_quizzes_taken: {
        type: Sequelize.INTEGER
      },
      total_score: {
        type: Sequelize.INTEGER
      },
      total_correct_answers: {
        type: Sequelize.INTEGER
      },
      total_incorrect_answers: {
        type: Sequelize.INTEGER
      },
      total_duration: {
        type: Sequelize.TIME
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cumulative_learning_analytics');
  }
};
