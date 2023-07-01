// File: seeders/thread_comments-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('thread_comments', [
      {
        thread_id: 1,
        user_id: 1,
        content: 'Comment for thread 1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        thread_id: 2,
        user_id: 2,
        content: 'Comment for thread 2',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('thread_comments', null, {});
  },
};
