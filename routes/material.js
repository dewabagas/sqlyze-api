const express = require('express');
const materialsController = require('../controllers/materials.controller');

const router = express.Router();

router.get('/chapters/:typeId', materialsController.getAllMaterials);
router.get('/chapters/detail/:materialId', materialsController.getMaterialById);

module.exports = router;
