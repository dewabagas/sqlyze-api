const express = require('express');
const quizController = require('../controllers/quiz.controller');
const { verify } = require('../middlewares/auth');

const router = express.Router();

router.get('/quiz/:quizId', verify, quizController.getQuizById);
router.get('/quiz/:quizId/questions', verify, quizController.getQuizQuestions);

module.exports = router;
