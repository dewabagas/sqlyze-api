const express = require('express');
const quizController = require('../controllers/quiz.controller');
const { verify } = require('../middlewares/auth');

const router = express.Router();

router.get('/quiz/:materialId', verify, quizController.getQuizByMaterialId);
router.get('/quiz/:quizId/questions', verify, quizController.getQuizQuestions);
router.post('/quiz/submit', verify, quizController.submitQuizAnswer);
router.get('/quiz/:quizId/result/:userId', verify, quizController.getQuizResult);

module.exports = router;
