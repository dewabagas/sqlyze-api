const db = require("../config/db");
const { LearningMaterial, Video, Podcast, LearningDocument, LearningPresentation } = require("../models/index");

exports.getAllMaterials = async (req, res) => {
  try {
    const materials = await LearningMaterial.findAll({
      include: [
        {
          model: Video,
          foreign_key: 'material_id'
        },
        {
          model: Podcast,
          foreign_key: 'material_id'
        },
        {
          model: LearningDocument,
          foreign_key: 'material_id'
        },
        {
          model: LearningPresentation,
          foreign_key: 'material_id'          
        },
      ],
    });

    // Map over the materials to create new objects with the keys in lowercase
    const transformedMaterials = materials.map(material => {
      // Convert the material instance to a plain object
      const plainMaterial = material.get({ plain: true });

      // Map over the keys of the plainMaterial object to create a new object
      // with the keys converted to lowercase
      const newMaterial = Object.keys(plainMaterial).reduce((result, key) => {
        result[key.toLowerCase()] = plainMaterial[key];
        return result;
      }, {});

      return newMaterial;
    });

    res.status(200).send({
      status: "SUCCESS",
      code: 200,
      message: "Materials fetched successfully",
      result: transformedMaterials,
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
    const material = await LearningMaterial.findOne({
      where: { id: materialId },
      include: [
        {
          model: Video,
          as: 'video',
          foreign_key: 'material_id'
        },
        {
          model: Podcast,
          as: 'podcast',
          foreign_key: 'material_id'
        },
        {
          model: LearningDocument,
          as: 'learning_document',
          foreign_key: 'material_id'
        },
        {
          model: LearningPresentation,
          as: 'learning_presentation',
          foreign_key: 'material_id'         
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
