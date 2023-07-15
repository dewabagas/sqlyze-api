const { Quiz, QuizQuestion, QuizAnswer, QuizAttempt } = require('../models/index');
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

exports.submitQuizAnswer = async (req, res) => {
    const { quizId, userId, questionId, answerId } = req.body;
  
    try {
      const answer = await QuizAnswer.findOne({
        where: { id: answerId, question_id: questionId }
      });
  
      if (!answer) {
        return res.status(404).send({
          status: "FAILED",
          code: 404,
          message: "Answer not found",
        });
      }
  
      const [attempt, created] = await QuizAttempt.findOrCreate({
        where: { quiz_id: quizId, user_id: userId },
        defaults: {
          score: 0,
          correct_answers: 0,
          incorrect_answers: 0,
          duration: 0, 
        }
      });
  
      if (answer.is_correct) {
        attempt.score += 1; 
        attempt.correct_answers += 1;
      } else {
        attempt.incorrect_answers += 1;
      }
  
      await attempt.save();
  
      res.status(200).send({
        status: "SUCCESS",
        code: 200,
        message: "Quiz Answer submitted successfully",
        result: attempt,
      });
  
    } catch (error) {
      console.error("error", error);
      res.status(500).send({
        status: "FAILED",
        message: "Quiz Answer submission failed",
      });
    }
  };

  exports.getQuizResult = async (req, res) => {
    const { quizId, userId } = req.params;
  
    try {
      const quiz = await Quiz.findByPk(quizId);
      if (!quiz) {
        return res.status(404).send({
          status: "FAILED",
          code: 404,
          message: "Quiz not found",
        });
      }
  
      const attempt = await QuizAttempt.findOne({
        where: { quiz_id: quizId, user_id: userId }
      });
  
      if (!attempt) {
        return res.status(404).send({
          status: "FAILED",
          code: 404,
          message: "Quiz attempt not found",
        });
      }
  
      const totalQuestions = await quiz.countQuizQuestions();
      const score = attempt.score;
      const correctAnswers = attempt.correct_answers;
      const incorrectAnswers = totalQuestions - correctAnswers;
  
      res.status(200).send({
        status: "SUCCESS",
        code: 200,
        message: "Quiz result fetched successfully",
        result: {
          total_questions: totalQuestions,
          correct_answers: correctAnswers,
          incorrect_answers: incorrectAnswers,
          score: score,
        },
      });
    } catch (error) {
      console.error("error", error);
      res.status(500).send({
        status: "FAILED",
        message: "Fetching quiz result failed",
      });
    }
  };