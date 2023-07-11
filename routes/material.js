const express = require('express');
const materialsController = require('../controllers/materials.controller');
const { verify } = require('../middlewares/auth');

const router = express.Router();

router.get('/chapters/:materialType', verify, materialsController.getAllMaterials);
router.get('/chapters/detail/:materialId', verify, materialsController.getMaterialById);

module.exports = router;
