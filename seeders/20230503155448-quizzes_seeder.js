// File: 20230504023456-quiz-analytics-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Quizzes
    const quizzes = await queryInterface.bulkInsert('quizzes', [
      {
        material_id: 1, // Make sure this ID exists in the learning_materials table
        title: 'Quiz 1',
        is_final_exam: false,
        duration: 10,
        passing_score: 70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: 2, // Make sure this ID exists in the learning_materials table
        title: 'Quiz 2',
        is_final_exam: true,
        duration: 20,
        passing_score: 80,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], { returning: true });

    // Get quiz IDs
    const [quiz1, quiz2] = quizzes.map(quiz => quiz.id);

    // QuizAttempts
    await queryInterface.bulkInsert('quiz_attempts', [
      {
        user_id: 1, // Make sure this ID exists in the users table
        quiz_id: quiz1,
        score: 80,
        correct_answers: 8,
        incorrect_answers: 2,
        start_time: new Date(),
        end_time: new Date(new Date().setHours(new Date().getHours() + 1)),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2, // Make sure this ID exists in the users table
        quiz_id: quiz2,
        score: 90,
        correct_answers: 18,
        incorrect_answers: 2,
        start_time: new Date(),
        end_time: new Date(new Date().setHours(new Date().getHours() + 1)),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    // QuizQuestions
    const quizQuestions = await queryInterface.bulkInsert('quiz_questions', [
      {
        quiz_id: quiz1,
        question: 'What is the capital of France?',
        question_type: 'multiple_choice',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        quiz_id: quiz1,
        question: 'What is the largest ocean on Earth?',
        question_type: 'multiple_choice',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], { returning: true });

    // Get question IDs
    const [question1, question2] = quizQuestions.map(question => question.id);

    // QuizAnswers
    await queryInterface.bulkInsert('quiz_answers', [
      {
        question_id: question1,
        answer: 'Paris',
        is_correct: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: question1,
        answer: 'Berlin',
        is_correct: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: question2,
        answer: 'Pacific Ocean',
        is_correct: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: question2,
        answer: 'Atlantic Ocean',
        is_correct: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    // CumulativeLearningAnalytics
        // CumulativeLearningAnalytics
        await queryInterface.bulkInsert('cumulative_learning_analytics', [
          {
            user_id: 1, // Make sure this ID exists in the users table
            total_quizzes_taken: 1,
            total_score: 80,
            total_correct_answers: 8,
            total_incorrect_answers: 2,
            total_duration: Sequelize.literal(`INTERVAL '5 minutes'`),
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            user_id: 2, // Make sure this ID exists in the users table
            total_quizzes_taken: 2,
            total_score: 170,
            total_correct_answers: 26,
            total_incorrect_answers: 4,
            total_duration: Sequelize.literal(`INTERVAL '15 minutes'`),
            created_at: new Date(),
            updated_at: new Date(),
          },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('quizzes', null, {});
      await queryInterface.bulkDelete('quiz_attempts', null, {});
      await queryInterface.bulkDelete('quiz_questions', null, {});
      await queryInterface.bulkDelete('quiz_answers', null, {});
      await queryInterface.bulkDelete('cumulative_learning_analytics', null, {});
    },
};
