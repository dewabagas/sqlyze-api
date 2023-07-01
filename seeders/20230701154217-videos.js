// File: seeders/videos-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('videos', [
      {
        material_id: 1,
        title: 'Introduction to Programming',
        url: 'https://www.youtube.com/watch?v=someURL',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 2,
        title: 'Advanced Programming Concepts',
        url: 'https://www.youtube.com/watch?v=someOtherURL',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('videos', null, {});
  },
};
