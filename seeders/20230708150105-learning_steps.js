// File: seeders/learning_steps.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('learning_steps', [
      //DDL_1
      {
        material_id: 1,
        title: 'Pengenalan Data Definition Language',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_1/ddl_1_pengenalan_ddl_1.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 1,
        title: 'Pengenalan Data Definition Language',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_1/ddl_1_pengenalan_ddl_2.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 1,
        title: 'Pengenalan Data Definition Language',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_1/ddl_1_pengenalan_ddl_3.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 1,
        title: 'Pengenalan Data Definition Language',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_1/ddl_1_pengenalan_ddl_4.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      //DDL_2
      {
        material_id: 2,
        title: 'CREATE Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_2/ddl_2_create_statement_1.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 2,
        title: 'CREATE Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_2/ddl_2_create_statement_2.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 2,
        title: 'CREATE Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_2/ddl_2_create_statement_3.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 2,
        title: 'CREATE Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_2/ddl_2_create_statement_4.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      //DDL_3
      {
        material_id: 3,
        title: 'ALTER Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_3/ddl_3_alter_statement_1.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 3,
        title: 'ALTER Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_3/ddl_3_alter_statement_2.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      //DDL_4
      {
        material_id: 4,
        title: 'DROP Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_4/ddl_4_drop_statement_1.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 4,
        title: 'DROP Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_4/ddl_4_drop_statement_2.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      //DDL_5
      {
        material_id: 5,
        title: 'TRUNCATE Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_5/ddl_5_truncate_statement_1.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 5,
        title: 'TRUNCATE Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_5/ddl_5_truncate_statement_2.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 5,
        title: 'TRUNCATE Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_5/ddl_5_truncate_statement_3.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 5,
        title: 'TRUNCATE Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_5/ddl_5_truncate_statement_4.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      //DDL_6
      {
        material_id: 6,
        title: 'RENAME Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_6/ddl_6_rename_statement_1.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 6,
        title: 'RENAME Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_6/ddl_6_rename_statement_2.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 6,
        title: 'RENAME Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_6/ddl_6_rename_statement_3.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      //DDL_7
      //VIEW
      {
        material_id: 7,
        title: 'VIEW, FUNCTION and TRIGGER',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_7/ddl_7_view_1.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 7,
        title: 'VIEW, FUNCTION and TRIGGER',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_7/ddl_7_view_2.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      //FUNCTION
      {
        material_id: 7,
        title: 'VIEW, FUNCTION and TRIGGER',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_7/ddl_7_function_1.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 7,
        title: 'VIEW, FUNCTION and TRIGGER',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_7/ddl_7_function_2.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      //TRIGGER
      {
        material_id: 7,
        title: 'VIEW, FUNCTION and TRIGGER',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_7/ddl_7_trigger_1.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 7,
        title: 'VIEW, FUNCTION and TRIGGER',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_7/ddl_7_trigger_2.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      //DDL_8
      {
        material_id: 8,
        title: 'Pentingnya DDL',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_8/ddl_8_pentingnya_ddl_1.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 8,
        title: 'Pentingnya DDL',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_8/ddl_8_pentingnya_ddl_2.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 8,
        title: 'Pentingnya DDL',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_8/ddl_8_pentingnya_ddl_3.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      //DDL_9
      {
        material_id: 9,
        title: 'Studi Kasus',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_9/ddl_9_studi_kasus_1.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 9,
        title: 'Studi Kasus',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_9/ddl_9_studi_kasus_2.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 9,
        title: 'Studi Kasus',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_9/ddl_9_studi_kasus_3.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 9,
        title: 'Studi Kasus',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_9/ddl_9_studi_kasus_4.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 9,
        title: 'Studi Kasus',
        url: 'https://sqlyze-api.onrender.com/htmls/ddl_9/ddl_9_studi_kasus_5.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      //DML_1
      {
        material_id: 10,
        title: 'Pengenalan Data Manipulation Language',
        url: 'https://sqlyze-api.onrender.com/htmls/dml_1/dml_1_pengenalan_dml_1.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 10,
        title: 'Pengenalan Data Manipulation Language',
        url: 'https://sqlyze-api.onrender.com/htmls/dml_1/dml_1_pengenalan_dml_2.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 10,
        title: 'Pengenalan Data Manipulation Language',
        url: 'https://sqlyze-api.onrender.com/htmls/dml_1/dml_1_pengenalan_dml_3.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      //DML_2
      {
        material_id: 11,
        title: 'SELECT Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/dml_2/dml_2_select_statement_1.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 11,
        title: 'SELECT Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/dml_2/dml_2_select_statement_2.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      //DML_3
      {
        material_id: 12,
        title: 'INSERT Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/dml_3/dml_3_insert_statement_1.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 12,
        title: 'INSERT Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/dml_3/dml_3_insert_statement_2.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      //DML_4
      {
        material_id: 13,
        title: 'UPDATE Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/dml_4/dml_4_update_statement_1.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 13,
        title: 'UPDATE Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/dml_4/dml_4_update_statement_2.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      //DML_5
      {
        material_id: 14,
        title: 'DELETE Statement',
        url: 'https://sqlyze-api.onrender.com/htmls/dml_5/dml_5_delete_statement_1.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      //DML_6
      {
        material_id: 15,
        title: 'Subquery',
        url: 'https://sqlyze-api.onrender.com/htmls/dml_6/dml_6_subquery_1.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 15,
        title: 'Subquery',
        url: 'https://sqlyze-api.onrender.com/htmls/dml_6/dml_6_subquery_2.html',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('learning_steps', null, {});
  },
};
