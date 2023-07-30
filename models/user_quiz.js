const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class UserQuiz extends Model {
    static associate(models) {
      UserQuiz.belongsTo(models.User, {
        foreignKey: 'user_id',
        targetKey: 'id'
      });
      UserQuiz.belongsTo(models.Quiz, {
        foreignKey: 'quiz_id',
        targetKey: 'id'
      });
      models.Quiz.belongsToMany(models.User, {
        through: UserQuiz,
        foreignKey: 'quiz_id',
        otherKey: 'user_id'
      });
      models.User.belongsToMany(models.Quiz, {
        through: UserQuiz,
        foreignKey: 'user_id',
        otherKey: 'quiz_id'
      });
    }
  }
  UserQuiz.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    quiz_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    is_unlocked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'UserQuiz',
    tableName: 'user_quizzes',
    underscored: true,
    uniqueKeys: {
      unique_tag: {
        customIndex: true,
        fields: ['user_id', 'quiz_id']
      }
    }
  });
  return UserQuiz;
};
