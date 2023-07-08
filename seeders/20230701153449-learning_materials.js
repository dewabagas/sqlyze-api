// File: seeders/learning_materials-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('learning_materials', [
      {
        id: 1,
        title: 'Pengenalan Data Definition Language',
        description: 'Eksplorasi awal terhadap DDL',
        material_type: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        title: 'CREATE Statement',
        description: 'Membangun struktur data dengan CREATE',
        material_type: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        title: 'ALTER Statement',
        description: 'Modifikasi struktur data eksisting',
        material_type: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        title: 'DROP Statement',
        description: 'Menghapus elemen dari basis data.',
        material_type: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        title: 'TRUNCATE Statement',
        description: 'Menghapus data dengan cepat dan efisien.',
        material_type: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        title: 'RENAME Statement',
        description: 'Mengubah nama elemen dalam basis data.',
        material_type: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        title: 'View, Function & Trigger',
        description: 'Optimalisasi basis data melalui view dan fungsi.',
        material_type: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        title: 'Latihan & Studi Kasus',
        description: 'Praktik langsung dan penerapan konsep DDL.',
        material_type: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        title: 'Pentingnya Memahami DDL Dalam Pengembangan Basis Data',
        description: 'Mengapa DDL esensial dalam pengembangan DB',
        material_type: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        title: 'Pengenalan Data Manipulation Language',
        description: 'Memahami bagaimana DML bekerja.',
        material_type: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        title: 'SELECT Statement',
        description: 'Mengambil data dengan perintah SELECT.',
        material_type: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        title: 'INSERT Statement',
        description: 'Menambah data baru dengan INSERT.',
        material_type: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 13,
        title: 'UPDATE Statement',
        description: 'Memodifikasi data dengan perintah UPDATE.',
        material_type: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 14,
        title: 'DELETE Statement',
        description: 'Menghapus data dengan perintah DELETE.',
        material_type: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 15,
        title: 'Subquery',
        description: 'Memanfaatkan subquery dalam DML.',
        material_type: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('learning_materials', null, {});
  },
};
