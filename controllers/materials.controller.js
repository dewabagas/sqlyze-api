const db = require("../config/db");
const { LearningMaterial, Video, Podcast, LearningDocument, LearningPresentation, LearningStep, User, UserMaterial } = require("../models/index");
const _ = require('lodash');

exports.getAllMaterials = async (req, res) => {
  const { materialType } = req.params;
  const userId = req.id;

  try {
    const materials = await LearningMaterial.findAll({
      where: { material_type: materialType },
      include: [
        {
          model: User,
          through: { attributes: ['is_unlocked'] },
          required: false
        }
      ],
      order: [['id', 'ASC']]
    });

    if (materials) {
      const transformedMaterials = materials.map(material => {
        const userMaterial = material.Users.find(u => u.id === userId);
        let newMaterial = {
          id: material.id,
          title: material.title,
          description: material.description,
          material_type: material.material_type,
          is_locked: material.is_locked,
          is_unlocked: userMaterial ? userMaterial.UserMaterial.is_unlocked : false,
          created_at: material.createdAt,
          updated_at: material.updatedAt
        };

        return newMaterial;
      });

      res.status(200).send({
        status: "SUCCESS",
        code: 200,
        message: "Materials fetched successfully",
        result: transformedMaterials,
      });
    } else {
      res.status(404).send({
        status: "FAILED",
        message: "Materials not found",
      });
    }
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
          foreignKey: 'material_id'
        },
        {
          model: Podcast,
          foreignKey: 'material_id'
        },
        {
          model: LearningDocument,
          foreignKey: 'material_id'
        },
        {
          model: LearningPresentation,
          foreignKey: 'material_id'
        },
        {
          model: LearningStep,
          foreignKey: 'material_id'
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

    const plainMaterial = material.get({ plain: true });
    const newMaterial = Object.keys(plainMaterial).reduce((result, key) => {
      result[_.snakeCase(key)] = plainMaterial[key];
      return result;
    }, {});

    res.status(200).send({
      status: "SUCCESS",
      code: 200,
      message: "Material fetched successfully",
      result: newMaterial,
    });
  } catch (error) {
    console.error("error", error);
    res.status(500).send({
      status: "FAILED",
      message: "Material fetching failed",
    });
  }
};

