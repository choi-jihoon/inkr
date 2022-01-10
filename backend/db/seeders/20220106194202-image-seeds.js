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
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};
