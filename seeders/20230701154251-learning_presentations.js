// File: seeders/learning_presentations-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('learning_presentations', [
      {
        material_id: 1,
        title: 'Presentation: Pengenalan DDL',
        file_url: 'https://drive.google.com/uc?id=1NcV5Pq0wje6xTO1taiWTGjqIP-uMXGO6',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 2,
        title: 'Presentation: CREATE Statement',
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
