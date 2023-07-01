// File: seeders/quiz_questions-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('quiz_questions', [
      {
        quiz_id: 1,
        question: 'What is the capital of Indonesia?',
        question_type: 'multiple_choice',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        quiz_id: 2,
        question: 'Who is the current president of Indonesia?',
        question_type: 'multiple_choice',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('quiz_questions', null, {});
  },
};
