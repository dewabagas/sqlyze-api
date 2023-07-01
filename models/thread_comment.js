'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ThreadComment extends Model {
    static associate(models) {
      ThreadComment.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      ThreadComment.belongsTo(models.DiscussionThread, {
        foreignKey: 'thread_id',
      });
    }
  }
  ThreadComment.init({
    thread_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'ThreadComment',
    tableName: 'thread_comments',
    underscored: true
  });
  return ThreadComment;
};
