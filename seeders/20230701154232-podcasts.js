// File: seeders/podcasts-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('podcasts', [
      {
        material_id: 1,
        title: 'Podcast: Introduction to Programming',
        url: 'https://www.example.com/podcast/someURL',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 2,
        title: 'Podcast: Advanced Programming Concepts',
        url: 'https://www.example.com/podcast/someOtherURL',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('podcasts', null, {});
  },
};
