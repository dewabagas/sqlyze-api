const express = require('express');
const analyticsController = require('../controllers/analytics.controller');
const { verify } = require('../middlewares/auth');

const router = express.Router();

router.get('/cumulative_analytic/:userId', verify, analyticsController.getCumulativeAnalytics);
router.get('/analytic/:userId', verify, analyticsController.getUserLearningAnalytics);

module.exports = router;
