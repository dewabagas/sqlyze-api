// File: seeders/profiles-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('profiles', [
      {
        user_id: 1, // assuming the user_id is 1 for user1
        full_name: 'Bagas Dewanggono',
        nis: '1904351',
        email: 'bagas.dewa@upi.edu',
        msisdn: '6285158046944',
        birthdate: '2000-07-04',
        gender: 'male',
        profile_image_url: 'https://image.akurat.co/uploads/images/2023/03/big/img_6420f30c51a2b9-08788820-63045914.jpg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2, // assuming the user_id is 2 for user2
        full_name: 'Bagas KLAR',
        nis: '1904351',
        email: 'bagas.dewanggono@klarsmile.com',
        msisdn: '0987654321',
        birthdate: '2000-07-04',
        gender: 'female',
        profile_image_url: 'https://akcdn.detik.net.id/visual/2023/05/22/jujutsu-kaisen-season-2-2023_169.png?w=650',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('profiles', null, {});
  },
};
