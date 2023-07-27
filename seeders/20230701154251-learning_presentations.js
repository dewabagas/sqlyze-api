// File: seeders/learning_presentations-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('learning_presentations', [
      {
        material_id: 1,
        title: 'Pengenalan DDL',
        file_url: 'https://sqlyze-api.onrender.com/htmls/slides/ddl_1_pengenalan_ddl.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 2,
        title: 'CREATE Statement',
        file_url: 'https://sqlyze-api.onrender.com/htmls/slides/ddl_2_create_statement.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 3,
        title: 'ALTER Statement',
        file_url: 'https://sqlyze-api.onrender.com/htmls/slides/ddl_3_alter_statement.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 4,
        title: 'DROP Statement',
        file_url: 'https://sqlyze-api.onrender.com/htmls/slides/ddl_4_drop_statement.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 5,
        title: 'TRUNCATE Statement',
        file_url: 'https://sqlyze-api.onrender.com/htmls/slides/ddl_5_truncate_statement.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 6,
        title: 'RENAME Statement',
        file_url: 'https://sqlyze-api.onrender.com/htmls/slides/ddl_6_rename_statement.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 7,
        title: 'TRIGGER, View, dan Function',
        file_url: 'https://sqlyze-api.onrender.com/htmls/slides/ddl_7_trigger_view_function.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 8,
        title: 'Pentingnya DDL',
        file_url: 'https://sqlyze-api.onrender.com/htmls/slides/ddl_8_pentingnya_ddl.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 9,
        title: 'Studi Kasus',
        file_url: 'ddl_9_studi_kasus',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 10,
        title: 'Pengenalan DML',
        file_url: 'https://sqlyze-api.onrender.com/htmls/slides/dml_1_pengenalan_dml.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 11,
        title: 'SELECT Statement',
        file_url: 'https://sqlyze-api.onrender.com/htmls/slides/dml_2_select_statement.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 12,
        title: 'INSERT Statement',
        file_url: 'https://sqlyze-api.onrender.com/htmls/slides/dml_3_insert_statement.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 13,
        title: 'UPDATE Statement',
        file_url: 'https://sqlyze-api.onrender.com/htmls/slides/dml_4_update_statement.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 14,
        title: 'DELETE Statement',
        file_url: 'https://sqlyze-api.onrender.com/htmls/slides/dml_5_delete_statement.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 15,
        title: 'Subquery',
        file_url: 'https://sqlyze-api.onrender.com/htmls/slides/dml_6_subquery.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('learning_presentations', null, {});
  },
};
