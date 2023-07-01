'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DiscussionThread extends Model {
    static associate(models) {
      DiscussionThread.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      DiscussionThread.hasMany(models.ThreadComment, {
        foreignKey: 'thread_id',
      });
    }
  }
  DiscussionThread.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'DiscussionThread',
    tableName: 'discussion_thread',
    underscored: true
  });
  return DiscussionThread;
};
