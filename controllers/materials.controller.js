const db = require("../config/db");
const { LearningMaterial, Video, Podcast, LearningDocument, LearningPresentation } = require("../models/index");

exports.getAllMaterials = async (req, res) => {
  try {
    const materials = await LearningMaterial.findAll({
      include: [
        {
          model: Video,
          as: 'video',
        },
        {
          model: Podcast,
          as: 'podcast'
        },
        {
          model: LearningDocument,
          as: 'learning_document'
        },
        {
          model: LearningPresentation,
          as: 'learning_presentation',
          
        },
      ],
    });

    res.status(200).send({
      status: "SUCCESS",
      code: 200,
      message: "Materials fetched successfully",
      result: materials,
    });
  } catch (error) {
    console.error("error", error);
    res.status(500).send({
      status: "FAILED",
      message: "Materials fetching failed",
    });
  }
};
