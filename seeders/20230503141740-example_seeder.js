// File: 20230503123456-example-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Users
    const users = await queryInterface.bulkInsert('users', [
      {
        email: 'admin@example.com',
        password: 'admin123',
        role: 'admin',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: 'teacher@example.com',
        password: 'teacher123',
        role: 'teacher',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: 'student@example.com',
        password: 'student123',
        role: 'student',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], { returning: true });

    // Get user IDs
    const [admin, teacher, student] = users.map(user => user.id);

    // Profiles
    await queryInterface.bulkInsert('profiles', [
      {
        user_id: admin,
        full_name: 'Admin User',
        nis: 'N001',
        email: 'admin@example.com',
        msisdn: '1234567890',
        birthdate: new Date(),
        gender: 'male',
        profile_image_url: 'https://example.com/admin.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: teacher,
        full_name: 'Teacher User',
        nis: 'N002',
        email: 'teacher@example.com',
        msisdn: '0987654321',
        birthdate: new Date(),
        gender: 'female',
        profile_image_url: 'https://example.com/teacher.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: student,
        full_name: 'Student User',
        nis: 'N003',
        email: 'student@example.com',
        msisdn: '1234509876',
        birthdate: new Date(),
        gender: 'male',
        profile_image_url: 'https://example.com/student.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    // Add more seed data for other tables as needed.
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('profiles', null, {});
    // Add more delete statements for other tables as needed.
  },
};
