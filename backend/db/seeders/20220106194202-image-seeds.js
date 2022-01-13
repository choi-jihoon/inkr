'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Images', [
      {
        userId: 4,
        imageUrl: '/images/tat-01.jpg',
        favoritedCount: 89,
        tags: ['mushroom']
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
        favoritedCount: 72
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
        tags: ['concept']
      },
      {
        userId: 4,
        imageUrl: '/images/art-02.jpg',
        favoritedCount: 120
      },
      {
        userId: 4,
        imageUrl: '/images/art-03.jpg',
        favoritedCount: 250,
        tags: ['concept']
      },
      {
        userId: 4,
        imageUrl: '/images/art-04.jpg',
        favoritedCount: 99,
        tags: ['concept']
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
        favoritedCount: 210
      },
      {
        userId: 2,
        imageUrl: '/images/02-banul.PNG',
        favoritedCount: 340
      },
      {
        userId: 2,
        imageUrl: '/images/03-banul.PNG',
        favoritedCount: 45
      },
      {
        userId: 2,
        imageUrl: '/images/04-banul.PNG',
        favoritedCount: 907
      },
      {
        userId: 2,
        imageUrl: '/images/05-banul.PNG',
        favoritedCount: 567
      },
      {
        userId: 2,
        imageUrl: '/images/06-banul.PNG',
        favoritedCount: 469
      },
      {
        userId: 2,
        imageUrl: '/images/07-banul.PNG',
        favoritedCount: 212
      },
      {
        userId: 5,
        imageUrl: '/images/daniginzburg-01.JPG',
        favoritedCount: 212,
        tags: ['wolf', 'geometric']
      },
      {
        userId: 5,
        imageUrl: '/images/daniginzburg-02.JPG',
        favoritedCount: 410,
        tags: ['phoenix', 'color']
      },
      {
        userId: 5,
        imageUrl: '/images/daniginzburg-03.JPG',
        favoritedCount: 280,
        tags: ['dinosaur']
      },
      {
        userId: 1,
        imageUrl: '/images/01-demo.JPG',
        favoritedCount: 24
      },
      {
        userId: 1,
        imageUrl: '/images/02-demo.JPG',
        favoritedCount: 50,
        tags: ['turtle', 'color']
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};
