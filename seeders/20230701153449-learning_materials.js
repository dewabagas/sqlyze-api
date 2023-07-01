// File: seeders/learning_materials-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('learning_materials', [
      {
        id: 1,
        title: 'Introduction to Programming',
        description: 'Learn the basics of programming.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        title: 'Advanced Programming Concepts',
        description: 'Dive deeper into advanced programming topics.',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('learning_materials', null, {});
  },
};
