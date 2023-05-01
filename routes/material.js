const express = require('express');
const materialsController = require('../controllers/materials.controller');

const router = express.Router();

router.get('/chapters', materialsController.getAllMaterials);

module.exports = router;
