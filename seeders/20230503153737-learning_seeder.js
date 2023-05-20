// File: 20230504012345-learning-seeder.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // LearningMaterials
    const learningMaterials = await queryInterface.bulkInsert('learning_materials', [
      {
        title: 'Learning Material 1',
        description: 'Description for Learning Material 1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Learning Material 2',
        description: 'Description for Learning Material 2',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], { returning: true });

    // Get learning material IDs
    const [material1, material2] = learningMaterials.map(material => material.id);

    // Videos
    await queryInterface.bulkInsert('videos', [
      {
        material_id: material1,
        title: 'Video 1',
        url: 'https://example.com/video1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: material2,
        title: 'Video 2',
        url: 'https://example.com/video2',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    // Podcasts
    await queryInterface.bulkInsert('podcasts', [
      {
        material_id: material1,
        title: 'Podcast 1',
        url: 'https://example.com/podcast1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: material2,
        title: 'Podcast 2',
        url: 'https://example.com/podcast2',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    // LearningPresentations
    await queryInterface.bulkInsert('learning_presentations', [
      {
        material_id: material1,
        title: 'Presentation 1',
        file_url: 'https://example.com/presentation1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: material2,
        title: 'Presentation 2',
        file_url: 'https://example.com/presentation2',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    // MaterialDocuments
    await queryInterface.bulkInsert('learning_documents', [
      {
        material_id: material1,
        title: 'Document 1',
        document_type: 'pdf',
        url: 'https://example.com/document1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        material_id: material2,
        title: 'Document 2',
        document_type: 'pdf',
        url: 'https://example.com/document2',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('learning_materials', null, {});
    await queryInterface.bulkDelete('videos', null, {});
    await queryInterface.bulkDelete('podcasts', null, {});
    await queryInterface.bulkDelete('learning_presentations', null, {});
    await queryInterface.bulkDelete('learning_documents', null, {});
  },
};
