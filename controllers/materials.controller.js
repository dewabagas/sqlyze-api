const db = require("../config/db");
const { LearningMaterial, Video, Podcast, LearningDocument, LearningPresentation } = require("../models/index");

exports.getAllMaterials = async (req, res) => {
  try {
    const { typeId } = req.params;
    console.log('typeId', typeId);
    const materials = await LearningMaterial.findAll({
      where: { material_type: typeId },
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

exports.getMaterialById = async (req, res) => {
  try {
    const { materialId } = req.params;
    console.log('materialId', materialId);
    const material = await LearningMaterial.findOne({
      where: { id: materialId },
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

    if (!material) {
      return res.status(404).send({
        status: "FAILED",
        code: 404,
        message: "Material not found",
      });
    }

    res.status(200).send({
      status: "SUCCESS",
      code: 200,
      message: "Material fetched successfully",
      result: material,
    });
  } catch (error) {
    console.error("error", error);
    res.status(500).send({
      status: "FAILED",
      message: "Material fetching failed",
    });
  }
};