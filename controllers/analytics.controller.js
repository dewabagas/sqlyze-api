const { CumulativeLearningAnalytics } = require('../models/index');

exports.getUserLearningAnalytics = async (req, res) => {
  const { userId } = req.params;

  try {
    const analytics = await CumulativeLearningAnalytics.findOne({
      where: { user_id: userId }
    });

    if (!analytics) {
      return res.status(404).send({
        status: "FAILED",
        code: 404,
        message: "No learning analytics found for the given user",
      });
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
