// File: seeders/users-seeder.js

'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'bagas.dewa@upi.edu',
        password: bcrypt.hashSync('bagas1', 10),
        role: 'student',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: 'bagas.dewanggono@klarsmile.com',
        password: bcrypt.hashSync('bagas1', 10),
        role: 'admin',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
