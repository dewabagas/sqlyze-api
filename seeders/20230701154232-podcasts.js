// File: seeders/podcasts-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('podcasts', [
      {
        material_id: 1,
        title: 'Podcast: Pengenalan DDL',
        url: 'https://d3ctxlq1ktw2nl.cloudfront.net/staging/2023-4-1/326982564-22050-1-b3f2b4a2326c3.m4a',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 2,
        title: 'Podcast: CREATE Statement',
        url: 'https://d3ctxlq1ktw2nl.cloudfront.net/staging/2023-4-1/326982564-22050-1-b3f2b4a2326c3.m4a',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('podcasts', null, {});
  },
};
