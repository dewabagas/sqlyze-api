'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('quizzes', [
      // DDL
      {
        id: 1,
        material_id: 1,
        title: 'Quiz Pengenalan Data Definition Language',
        is_final_exam: false,
        duration: '00:10:00',
        passing_score: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        material_id: 2,
        title: 'Quiz CREATE Statement',
        is_final_exam: false,
        duration: '00:10:00',
        passing_score: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        material_id: 3,
        title: 'Quiz ALTER Statement',
        is_final_exam: false,
        duration: '00:10:00',
        passing_score: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        material_id: 4,
        title: 'Quiz DROP Statement',
        is_final_exam: false,
        duration: '00:10:00',
        passing_score: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        material_id: 5,
        title: 'Quiz TRUNCATE Statement',
        is_final_exam: false,
        duration: '00:10:00',
        passing_score: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        material_id: 6,
        title: 'Quiz RENAME Statement',
        is_final_exam: false,
        duration: '00:10:00',
        passing_score: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        material_id: 7,
        title: 'Quiz View, Function & Trigger',
        is_final_exam: false,
        duration: '00:10:00',
        passing_score: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        material_id: 8,
        title: 'Quiz Pentingnya Memahami DDL Dalam Pengembangan Basis Data',
        is_final_exam: false,
        duration: '00:15:00',
        passing_score: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        material_id: 9,
        title: 'Quiz Studi Kasus',
        is_final_exam: false,
        duration: '00:15:00',
        passing_score: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // DML
      {
        id: 10,
        material_id: 10,
        title: 'Quiz Pengenalan Data Manipulation Language',
        is_final_exam: false,
        duration: '00:10:00',
        passing_score: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        material_id: 11,
        title: 'Quiz SELECT Statement',
        is_final_exam: false,
        duration: '00:10:00',
        passing_score: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        material_id: 12,
        title: 'Quiz INSERT Statement',
        is_final_exam: false,
        duration: '00:10:00',
        passing_score: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 13,
        material_id: 13,
        title: 'Quiz UPDATE Statement',
        is_final_exam: false,
        duration: '00:10:00',
        passing_score: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 14,
        material_id: 14,
        title: 'Quiz DELETE Statement',
        is_final_exam: false,
        duration: '00:10:00',
        passing_score: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 15,
        material_id: 15,
        title: 'Quiz Subquery',
        is_final_exam: false,
        duration: '00:15:00',
        passing_score: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('quizzes', null, {});
  },
};
