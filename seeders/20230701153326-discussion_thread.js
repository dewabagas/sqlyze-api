// File: seeders/discussion_thread-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('discussion_threads', [
      {
        id: 1,
        user_id: 1,
        title: 'Thread 1',
        content: 'Content for thread 1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        user_id: 2,
        title: 'Thread 2',
        content: 'Content for thread 2',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('discussion_threads', null, {});
  },
};
