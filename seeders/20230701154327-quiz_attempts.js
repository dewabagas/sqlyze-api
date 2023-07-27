'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('quiz_attempts', [
    //   {
    //   user_id: 1,
    //   quiz_id: 1,
    //   start_time: new Date(),
    //   end_time: new Date(),
    //   correct_answers: 15,
    //   incorrect_answers: 5,
    //   score: 75,
    //   created_at: new Date(),
    //   updated_at: new Date()
    // },{
    //   user_id: 2,
    //   quiz_id: 2,
    //   start_time: new Date(),
    //   end_time: new Date(),
    //   correct_answers: 10,
    //   incorrect_answers: 10,
    //   score: 50,
    //   created_at: new Date(),
    //   updated_at: new Date()
    // }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('quiz_attempts', null, {});
  }
};
