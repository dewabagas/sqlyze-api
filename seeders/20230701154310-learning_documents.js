// File: seeders/learning_documents-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('learning_documents', [
      {
        material_id: 1,
        title: 'Document: Introduction to Programming',
        document_type: 'PDF',
        url: 'https://www.example.com/document/someURL',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 2,
        title: 'Document: Advanced Programming Concepts',
        document_type: 'PDF',
        url: 'https://www.example.com/document/someOtherURL',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('learning_documents', null, {});
  },
};
