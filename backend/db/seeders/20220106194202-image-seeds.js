'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Images', [
      {
        userId: 4,
        imageUrl: '/images/tat-01.jpg',
        tags: ['mushroom']
      },
      {
        userId: 4,
        imageUrl: '/images/tat-02.jpg',
        tags: ['animal', 'octopus']
      },
      {
        userId: 4,
        imageUrl: '/images/tat-03.jpg'
      },
      {
        userId: 4,
        imageUrl: '/images/tat-04.jpg',
        tags: ['animal', 'snake']
      },
      {
        userId: 4,
        imageUrl: '/images/tat-05.jpg',
        tags: ['animal', 'snake']
      },
      {
        userId: 4,
        imageUrl: '/images/art-01.jpg',
        tags: ['concept']
      },
      {
        userId: 4,
        imageUrl: '/images/art-02.jpg'
      },
      {
        userId: 4,
        imageUrl: '/images/art-03.jpg',
        tags: ['concept']
      },
      {
        userId: 4,
        imageUrl: '/images/art-04.jpg',
        tags: ['concept']
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};
