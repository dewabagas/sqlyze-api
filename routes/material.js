const express = require('express');
const materialsController = require('../controllers/materials.controller');

const router = express.Router();

router.get('/chapters', materialsController.getAllMaterials);
router.get('/chapters/:materialId', materialsController.getMaterialById);

module.exports = router;
