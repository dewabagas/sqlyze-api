const { CumulativeLearningAnalytics } = require('../models/index');

exports.getUserLearningAnalytics = async (req, res) => {
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

