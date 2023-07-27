// File: seeders/videos-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('videos', [
      {
        id: 1,
        material_id: 1,
        title: 'Pengenalan DDL',
        url: '0SFkHyUtHr4',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        material_id: 2,
        title: 'CREATE Statement',
        url: 'WlQmSt_HF4E',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        material_id: 3,
        title: 'ALTER Statement',
        url: 'tQWVlCDIgf0',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        material_id: 4,
        title: 'DROP Statement',
        url: '_9OATCV5A_4',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        material_id: 5,
        title: 'TRUNCATE Statement',
        url: 'tJcV1dofT50',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        material_id: 6,
        title: 'RENAME Statement',
        url: 'QkwZdDVRN3c',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        material_id: 7,
        title: 'Understanding Views',
        url: '1rKtXbzotiM',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        material_id: 8,
        title: 'Creating and Managing Views',
        url: 'XrpFGrRs74I',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        material_id: 9,
        title: 'Understanding Triggers',
        url: 'bgvy4erfMUk',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        material_id: 10,
        title: 'Creating and Managing Triggers',
        url: 'Ps2vTB5Ub6s',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        material_id: 11,
        title: 'Understanding Functions',
        url: 'OXCv3ftfNMU',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        material_id: 12,
        title: 'Creating and Managing Functions',
        url: 'fijFCaj2w70',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 13,
        material_id: 13,
        title: 'Understanding DDL',
        url: 'c2o6hllt840',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 14,
        material_id: 14,
        title: 'Importance of DDL',
        url: 'C0wUmDVwTd4',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 15,
        material_id: 15,
        title: 'Roles in DDL',
        url: 'Elu_MmBD9bs',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('videos', null, {});
  },
};
