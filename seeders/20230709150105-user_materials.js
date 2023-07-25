// File: migrations/<timestamp>-add-constraint-to-user-materials.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('user_materials', {
      fields: ['user_id', 'material_id'],
      type: 'unique',
      name: 'user_materials_unique_constraint'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('user_materials', 'user_materials_unique_constraint');
  }
};
