// File: seeders/quiz_answers-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('quiz_answers', [
      {
        question_id: 1,
        answer: 'Jakarta',
        is_correct: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 2,
        answer: 'Joko Widodo',
        is_correct: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('quiz_answers', null, {});
  },
};
