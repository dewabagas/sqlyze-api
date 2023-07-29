const { CumulativeLearningAnalytics } = require('../models/index');

exports.getCumulativeAnalytics = async (req, res) => {
  const { userId } = req.params;

  try {
    let analytics = await CumulativeLearningAnalytics.findOne({
      where: { user_id: userId }
    });

    if (!analytics) {
      analytics = {
        user_id: userId,
        total_quizzes_taken: 0,
        total_score: 0,
        total_correct_answers: 0,
        total_incorrect_answers: 0,
        total_duration: "00:00:00"
      };
    }

    res.status(200).send({
      status: "SUCCESS",
      code: 200,
      message: "Learning analytics fetched successfully",
      result: analytics,
    });
  } catch (error) {
    console.error("error", error);
    res.status(500).send({
      status: "FAILED",
      message: "Fetching learning analytics failed",
    });
  }
};

exports.getUserLearningAnalytics = async (req, res) => {
  const { userId } = req.params;

  try {
    const attempts = await QuizAttempt.findAll({
      where: { user_id: userId },
      raw: true,
    });

    if (!attempts.length) {
      return res.status(404).send({
        status: "FAILED",
        code: 404,
        message: "No learning analytics found for the given user",
      });
    }

    let total_quizzes_taken = attempts.length;
    let total_score = attempts.reduce((acc, attempt) => acc + attempt.score, 0);
    let total_correct_answers = attempts.reduce((acc, attempt) => acc + attempt.correct_answers, 0);
    let total_incorrect_answers = attempts.reduce((acc, attempt) => acc + attempt.incorrect_answers, 0);
    let total_duration = "00:00:00";  // You need to calculate total duration based on your start_time and end_time
    
    res.status(200).send({
      status: "SUCCESS",
      code: 200,
      message: "Learning analytics fetched successfully",
      result: {
        user_id: userId,
        total_quizzes_taken,
        total_score,
        total_correct_answers,
        total_incorrect_answers,
        total_duration,
      },
    });
  } catch (error) {
    console.error("error", error);
    res.status(500).send({
      status: "FAILED",
      message: "Fetching learning analytics failed",
    });
  }
};


