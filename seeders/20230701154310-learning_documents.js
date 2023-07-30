// File: seeders/learning_documents-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('learning_documents', [
      {
        material_id: 1,
        title: 'Pengenalan DDL',
        document_type: 'PDF',
        url: 'https://sqlyze-api.onrender.com/htmls/pdfs/ddl_1_pengenalan_ddl.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 2,
        title: 'CREATE Statement',
        document_type: 'PDF',
        url: 'https://sqlyze-api.onrender.com/htmls/pdfs/ddl_2_create_statement.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 3,
        title: 'ALTER Statement',
        document_type: 'PDF',
        url: 'https://sqlyze-api.onrender.com/htmls/pdfs/ddl_3_alter_statement.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 4,
        title: 'DROP Statement',
        document_type: 'PDF',
        url: 'https://sqlyze-api.onrender.com/htmls/pdfs/ddl_4_drop_statement.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 5,
        title: 'TRUNCATE Statement',
        document_type: 'PDF',
        url: 'https://sqlyze-api.onrender.com/htmls/pdfs/ddl_5_truncate_statement.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 6,
        title: 'RENAME Statement',
        document_type: 'PDF',
        url: 'https://sqlyze-api.onrender.com/htmls/pdfs/ddl_6_rename_statement.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 7,
        title: 'TRIGGER, View, dan Function',
        document_type: 'PDF',
        url: 'https://sqlyze-api.onrender.com/htmls/pdfs/ddl_7_trigger_view_function.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 8,
        title: 'Pentingnya DDL',
        document_type: 'PDF',
        url: 'https://sqlyze-api.onrender.com/htmls/pdfs/ddl_8_pentingnya_ddl.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 9,
        title: 'Studi Kasus',
        document_type: 'PDF',
        url: 'https://sqlyze-api.onrender.com/htmls/pdfs/ddl_9_studi_kasus.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 10,
        title: 'Pengenalan DML',
        document_type: 'PDF',
        url: 'https://sqlyze-api.onrender.com/htmls/pdfs/dml_1_pengenalan_dml.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 11,
        title: 'SELECT Statement',
        document_type: 'PDF',
        url: 'https://sqlyze-api.onrender.com/htmls/pdfs/dml_2_select_statement.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 12,
        title: 'INSERT Statement',
        document_type: 'PDF',
        url: 'https://sqlyze-api.onrender.com/htmls/pdfs/dml_3_insert_statement.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 13,
        title: 'UPDATE Statement',
        document_type: 'PDF',
        url: 'https://sqlyze-api.onrender.com/htmls/pdfs/dml_4_update_statement.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 14,
        title: 'DELETE Statement',
        document_type: 'PDF',
        url: 'https://sqlyze-api.onrender.com/htmls/pdfs/dml_5_delete_statement.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 15,
        title: 'Subquery',
        document_type: 'PDF',
        url: 'https://sqlyze-api.onrender.com/htmls/pdfs/dml_6_subquery.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('learning_documents', null, {});
  },
};
