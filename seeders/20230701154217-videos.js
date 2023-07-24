// File: seeders/videos-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('videos', [
      {
        id: 1,
        material_id: 1,
        title: 'Pengenalan DDL',
        url: 'U4z3KvWeMOc',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        material_id: 2,
        title: 'CREATE Statement',
        url: 'U4z3KvWeMOc',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        material_id: 3,
        title: 'ALTER Statement',
        url: 'U4z3KvWeMOc',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        material_id: 4,
        title: 'DROP Statement',
        url: 'U4z3KvWeMOc',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        material_id: 5,
        title: 'TRUNCATE Statement',
        url: 'U4z3KvWeMOc',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        material_id: 6,
        title: 'RENAME Statement',
        url: 'U4z3KvWeMOc',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        material_id: 7,
        title: 'Understanding Views',
        url: 'U4z3KvWeMOc',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        material_id: 8,
        title: 'Creating and Managing Views',
        url: 'U4z3KvWeMOc',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        material_id: 9,
        title: 'Understanding Triggers',
        url: 'U4z3KvWeMOc',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        material_id: 10,
        title: 'Creating and Managing Triggers',
        url: 'U4z3KvWeMOc',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        material_id: 11,
        title: 'Understanding Functions',
        url: 'U4z3KvWeMOc',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        material_id: 12,
        title: 'Creating and Managing Functions',
        url: 'U4z3KvWeMOc',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 13,
        material_id: 13,
        title: 'Understanding DDL',
        url: 'U4z3KvWeMOc',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 14,
        material_id: 14,
        title: 'Importance of DDL',
        url: 'U4z3KvWeMOc',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 15,
        material_id: 15,
        title: 'Roles in DDL',
        url: 'U4z3KvWeMOc',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('videos', null, {});
  },
};
