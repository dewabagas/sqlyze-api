// File: seeders/quizzes-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('quizzes', [
      {
        id: 1,
        material_id: 1,
        title: 'Quiz 1',
        is_final_exam: false,
        duration: 30,
        passing_score: 60,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        material_id: 2,
        title: 'Quiz 2',
        is_final_exam: true,
        duration: 60,
        passing_score: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('quizzes', null, {});
  },
};
