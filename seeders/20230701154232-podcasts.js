// File: seeders/podcasts-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('podcasts', [
      {
        material_id: 1,
        title: 'Pengenalan DDL',
        url: 'https://sqlyze-api.onrender.com/htmls/podcasts/ddl_1_pengenalan_ddl.m4a',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 2,
        title: 'CREATE Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/podcasts/ddl_2_create_statement.m4a',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 3,
        title: 'ALTER Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/podcasts/ddl_3_alter_statement.m4a',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 4,
        title: 'DROP Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/podcasts/ddl_4_drop_statement.m4a',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 5,
        title: 'TRUNCATE Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/podcasts/ddl_5_truncate_statement.m4a',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 6,
        title: 'RENAME Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/podcasts/ddl_6_rename_statement.m4a',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 7,
        title: 'TRIGGER, View, dan Function',
        url: 'https://sqlyze-api.onrender.com/htmls/podcasts/ddl_7_trigger_view_function.m4a',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 8,
        title: 'Pentingnya DDL',
        url: 'https://sqlyze-api.onrender.com/htmls/podcasts/ddl_8_pentingnya_ddl.m4a',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 9,
        title: 'Studi Kasus',
        url: 'ddl_9_studi_kasus',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 10,
        title: 'Pengenalan DML',
        url: 'https://sqlyze-api.onrender.com/htmls/podcasts/dml_1_pengenalan_dml.m4a',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 11,
        title: 'SELECT Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/podcasts/dml_2_select_statement.m4a',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 12,
        title: 'INSERT Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/podcasts/dml_3_insert_statement.m4a',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 13,
        title: 'UPDATE Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/podcasts/dml_4_update_statement.m4a',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 14,
        title: 'DELETE Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/podcasts/dml_5_delete_statement.m4a',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 15,
        title: 'Subquery',
        url: 'https://sqlyze-api.onrender.com/htmls/podcasts/dml_6_subquery.m4a',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('podcasts', null, {});
  },
};
