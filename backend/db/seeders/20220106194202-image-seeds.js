'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Images', [
      {
        userId: 4,
        imageUrl: '/images/tat-01.jpg',
        favoritedCount: 89,
        tags: ['mushroom', 'dotwork', 'eye']
      },
      {
        userId: 4,
        imageUrl: '/images/tat-02.jpg',
        favoritedCount: 888,
        tags: ['animal', 'octopus']
      },
      {
        userId: 4,
        imageUrl: '/images/tat-03.jpg',
        favoritedCount: 72,
        tags: ['girl']
      },
      {
        userId: 4,
        imageUrl: '/images/tat-04.jpg',
        favoritedCount: 123,
        tags: ['animal', 'snake']
      },
      {
        userId: 4,
        imageUrl: '/images/tat-05.jpg',
        favoritedCount: 312,
        tags: ['animal', 'snake']
      },
      {
        userId: 4,
        imageUrl: '/images/art-01.jpg',
        favoritedCount: 65,
        tags: ['concept', 'art']
      },
      {
        userId: 4,
        imageUrl: '/images/art-02.jpg',
        favoritedCount: 120,
        tags: ['concept', 'variety']
      },
      {
        userId: 4,
        imageUrl: '/images/art-03.jpg',
        favoritedCount: 250,
        tags: ['concept', 'art', 'surreal']
      },
      {
        userId: 4,
        imageUrl: '/images/art-04.jpg',
        favoritedCount: 99,
        tags: ['concept', 'girl']
      },
      {
        userId: 3,
        imageUrl: '/images/me-01.jpg',
        favoritedCount: 25,
        tags: ['animal', 'birds', 'korean']
      },
      {
        userId: 3,
        imageUrl: '/images/me-02.jpg',
        favoritedCount: 54,
        tags: ['lip', 'lettering', 'math']
      },
      {
        userId: 3,
        imageUrl: '/images/me-03.jpg',
        favoritedCount: 90,
        tags: ['pokeball', 'pokemon']
      },
      {
        userId: 2,
        imageUrl: '/images/01-banul.PNG',
        favoritedCount: 210,
        tags: ['flower', 'color']
      },
      {
        userId: 2,
        imageUrl: '/images/02-banul.PNG',
        favoritedCount: 340,
        tags: ['flower', 'color']
      },
      {
        userId: 2,
        imageUrl: '/images/03-banul.PNG',
        favoritedCount: 45,
        tags: ['color', 'pastel']
      },
      {
        userId: 2,
        imageUrl: '/images/04-banul.PNG',
        favoritedCount: 907,
        tags: ['color', 'animal', 'phoenix']
      },
      {
        userId: 2,
        imageUrl: '/images/05-banul.PNG',
        favoritedCount: 567,
        tags: ['color', 'ear', 'flower', 'color']
      },
      {
        userId: 2,
        imageUrl: '/images/06-banul.PNG',
        favoritedCount: 469,
        tags: ['animal', 'cat', 'color']
      },
      {
        userId: 2,
        imageUrl: '/images/07-banul.PNG',
        favoritedCount: 212,
        tags: ['animal', 'whale', 'color']
      },
      {
        userId: 5,
        imageUrl: '/images/daniginzburg-01.JPG',
        favoritedCount: 212,
        tags: ['wolf', 'geometric', 'animal']
      },
      {
        userId: 5,
        imageUrl: '/images/daniginzburg-02.JPG',
        favoritedCount: 410,
        tags: ['phoenix', 'color', 'animal']
      },
      {
        userId: 5,
        imageUrl: '/images/daniginzburg-03.JPG',
        favoritedCount: 280,
        tags: ['dinosaur', 'animal']
      },
      {
        userId: 1,
        imageUrl: '/images/01-demo.JPG',
        favoritedCount: 24,
        tags: ['geometric', 'anatomy']
      },
      {
        userId: 1,
        imageUrl: '/images/02-demo.JPG',
        favoritedCount: 50,
        tags: ['turtle', 'color', 'animal']
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};
