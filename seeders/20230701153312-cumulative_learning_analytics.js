// File: seeders/cumulative_learning_analytics-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cumulative_learning_analytics', [
      // {
      //   user_id: 1,
      //   total_quizzes_taken: 10,
      //   total_score: 80,
      //   total_correct_answers: 30,
      //   total_incorrect_answers: 20,
      //   total_duration: '01:30:00',
      //   created_at: new Date(),
      //   updated_at: new Date(),
      // },
      // {
      //   user_id: 2,
      //   total_quizzes_taken: 20,
      //   total_score: 160,
      //   total_correct_answers: 60,
      //   total_incorrect_answers: 40,
      //   total_duration: '01:30:00',
      //   created_at: new Date(),
      //   updated_at: new Date(),
      // },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cumulative_learning_analytics', null, {});
  },
};
