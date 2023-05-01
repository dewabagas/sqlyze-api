const db = require("../config/db");
const { LearningMaterial, Video, Podcast, MaterialDocument } = require("../models/index");

exports.getAllMaterials = async (req, res) => {
  try {
    const materials = await LearningMaterial.findAll({
      include: [
        {
          model: Video,
        },
        {
          model: Podcast,
        },
        {
          model: MaterialDocument,
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
