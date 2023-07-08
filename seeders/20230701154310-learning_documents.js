// File: seeders/learning_documents-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('learning_documents', [
      {
        material_id: 1,
        title: 'Pengenalan DDL',
        document_type: 'PDF',
        url: 'https://drive.google.com/uc?id=1dQflASwaosA_R2oOfTvsimoB1Rxtvgra',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 2,
        title: 'CREATE Statement',
        document_type: 'PDF',
        url: 'https://drive.google.com/uc?id=1dQflASwaosA_R2oOfTvsimoB1Rxtvgra',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('learning_documents', null, {});
  },
};
