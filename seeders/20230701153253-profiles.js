// File: seeders/profiles-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('profiles', [
      {
        user_id: 1, // assuming the user_id is 1 for user1
        full_name: 'User 1',
        nis: 'NIS1',
        email: 'user1@example.com',
        msisdn: '1234567890',
        birthdate: '1990-01-01',
        gender: 'male',
        profile_image_url: 'http://example.com/user1.jpg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2, // assuming the user_id is 2 for user2
        full_name: 'User 2',
        nis: 'NIS2',
        email: 'user2@example.com',
        msisdn: '0987654321',
        birthdate: '1990-02-02',
        gender: 'female',
        profile_image_url: 'http://example.com/user2.jpg',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('profiles', null, {});
  },
};
