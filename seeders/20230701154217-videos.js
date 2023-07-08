// File: seeders/videos-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('videos', [
      {
        material_id: 1,
        title: 'Pengenalan DDL',
        url: 'U4z3KvWeMOc',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 2,
        title: 'CREATE Statement',
        url: 'Pengenalan DDL',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('videos', null, {});
  },
};
