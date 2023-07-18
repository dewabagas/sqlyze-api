const { sequelize } = require('../models');

const { Quiz, QuizQuestion, QuizAnswer, QuizAttempt, User, Profile } = require('../models/index');
const _ = require('lodash');

exports.getQuizByMaterialId = async (req, res) => {
  const { materialId } = req.params;

  try {
    const quiz = await Quiz.findOne({
      where: { material_id: materialId },
      include: [
        {
          model: QuizQuestion,
          attributes: [] // We are not selecting any attribute from QuizQuestion
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

    const questionCount = await QuizQuestion.count({
      where: { quiz_id: quiz.id }
    });

    // We are adding questionCount attribute to our quiz object
    quiz.dataValues.questionCount = questionCount;

    const plainQuiz = quiz.get({ plain: true });
    const newQuiz = Object.keys(plainQuiz).reduce((result, key) => {
      result[_.snakeCase(key)] = plainQuiz[key];
      return result;
    }, {});

    const reorderedQuiz = {
      id: newQuiz.id,
      material_id: newQuiz.material_id,
      title: newQuiz.title,
      is_final_exam: newQuiz.is_final_exam,
      duration: newQuiz.duration,
      passing_score: newQuiz.passing_score,
      question_count: newQuiz.question_count, // place it here
      created_at: newQuiz.created_at,
      updated_at: newQuiz.updated_at,
    };

    res.status(200).send({
      status: "SUCCESS",
      code: 200,
      message: "Quiz fetched successfully",
      result: reorderedQuiz, // use the reordered object here
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
  const { quiz_id, user_id, question_id, answer_id } = req.body;

  try {
    const answer = await QuizAnswer.findOne({
      where: { id: answer_id, question_id: question_id }
    });

    if (!answer) {
      return res.status(404).send({
        status: "FAILED",
        code: 404,
        message: "Answer not found",
      });
    }

    const [attempt, created] = await QuizAttempt.findOrCreate({
      where: { quiz_id: quiz_id, user_id: user_id },
      defaults: {
        score: 0,
        correct_answers: 0,
        incorrect_answers: 0,
        duration: 0,
        start_time: new Date(), // set initial start_time
        end_time: new Date(),   // set initial end_time
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
      where: { quiz_id: quizId, user_id: userId },
      include: [
        {
          model: Quiz,
          attributes: ['id', 'title'], // Assuming 'title' is the field for quiz_name
        },
        {
          model: User,
          attributes: ['id'],
          include: [
            {
              model: Profile,
              attributes: ['full_name'],
            },
          ],
        },
      ],
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
    const incorrectAnswers = attempt.incorrect_answers;
    const startTime = attempt.start_time;
    const endTime = attempt.end_time;

    // Calculate the total duration if start_time and end_time are not null
    let totalDuration = null;
    if (attempt.start_time && attempt.end_time) {
      const startTime = new Date(attempt.start_time);
      const endTime = new Date(attempt.end_time);
      totalDuration = Math.abs(endTime - startTime) / 1000; // in seconds
    }

    res.status(200).send({
      status: "SUCCESS",
      code: 200,
      message: "Quiz result fetched successfully",
      result: {
        quiz_id: attempt.Quiz.id,
        quiz_name: attempt.Quiz.title,
        user_id: attempt.User.id,
        full_name: attempt.User.Profile.full_name,
        total_questions: totalQuestions,
        correct_answers: correctAnswers,
        incorrect_answers: incorrectAnswers,
        score: score,
        start_time: startTime,
        end_time: endTime,
        total_duration: totalDuration,
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



