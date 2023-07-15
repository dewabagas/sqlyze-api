const { Quiz, QuizQuestion } = require('../models/index');
const _ = require('lodash');

exports.getQuizById = async (req, res) => {
  const { quizId } = req.params;

  try {
    const quiz = await Quiz.findOne({
      where: { id: quizId },
      include: [
        {
          model: QuizQuestion,
          foreignKey: 'quiz_id',
        },
      ],
    });

    if (!quiz) {
      return res.status(404).send({
        status: "FAILED",
        code: 404,
        message: "Quiz not found",
      });
    }

    const plainQuiz = quiz.get({ plain: true });
    const newQuiz = Object.keys(plainQuiz).reduce((result, key) => {
      result[_.snakeCase(key)] = plainQuiz[key];
      return result;
    }, {});

    res.status(200).send({
      status: "SUCCESS",
      code: 200,
      message: "Quiz fetched successfully",
      result: newQuiz,
    });

  } catch (error) {
    console.error("error", error);
    res.status(500).send({
      status: "FAILED",
      message: "Quiz fetching failed",
    });
  }
};

exports.getQuizQuestions = async (req, res) => {
  const { quizId } = req.params;

  try {
    const questions = await QuizQuestion.findAll({
      where: { quiz_id: quizId },
      include: [
        {
          model: QuizAnswer,
          foreignKey: 'question_id',
        },
      ],
    });

    if (!questions.length) {
      return res.status(404).send({
        status: "FAILED",
        code: 404,
        message: "Quiz Questions not found",
      });
    }

    const plainQuestions = questions.map(question => question.get({ plain: true }));
    const newQuestions = plainQuestions.map(question => {
      return Object.keys(question).reduce((result, key) => {
        result[_.snakeCase(key)] = question[key];
        return result;
      }, {});
    });

    res.status(200).send({
      status: "SUCCESS",
      code: 200,
      message: "Quiz Questions fetched successfully",
      result: newQuestions,
    });

  } catch (error) {
    console.error("error", error);
    res.status(500).send({
      status: "FAILED",
      message: "Quiz Questions fetching failed",
    });
  }
};
