// File: seeders/learning_steps.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('learning_steps', [
      {
        material_id: 1,
        title: 'Pengenalan Data Definition Language',
        url: 'http://10.0.2.2:3000/htmls/ddl_1_pengenalan_ddl.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 2,
        title: 'CREATE Statement',
        url: 'http://10.0.2.2:3000/htmls/ddl_1_pengenalan_ddl.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('learning_steps', null, {});
  },
};
