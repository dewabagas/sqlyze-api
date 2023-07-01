// File: seeders/learning_presentations-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('learning_presentations', [
      {
        material_id: 1,
        title: 'Presentation: Introduction to Programming',
        file_url: 'https://www.example.com/presentation/someURL',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 2,
        title: 'Presentation: Advanced Programming Concepts',
        file_url: 'https://www.example.com/presentation/someOtherURL',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('learning_presentations', null, {});
  },
};
