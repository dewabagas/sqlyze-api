'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_quizzes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // name of Source model
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      quiz_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'quizzes', // name of Source model
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      is_unlocked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_quizzes');
  }
};
