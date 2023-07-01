// File: seeders/users-seeder.js

'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'user1@example.com',
        password: bcrypt.hashSync('user1password', 10),
        role: 'student',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: 'user2@example.com',
        password: bcrypt.hashSync('user2password', 10),
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
