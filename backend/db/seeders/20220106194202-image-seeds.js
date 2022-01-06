'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Images', [
      {
        userId: 4,
        imageUrl: '/images/tat-01.jpg'
      },
      {
        userId: 4,
        imageUrl: '/images/tat-02.jpg'
      },
      {
        userId: 4,
        imageUrl: '/images/tat-03.jpg'
      },
      {
        userId: 4,
        imageUrl: '/images/tat-04.jpg'
      },
      {
        userId: 4,
        imageUrl: '/images/tat-05.jpg'
      },
      {
        userId: 4,
        imageUrl: '/images/art-01.jpg'
      },
      {
        userId: 4,
        imageUrl: '/images/art-02.jpg'
      },
      {
        userId: 4,
        imageUrl: '/images/art-03.jpg'
      },
      {
        userId: 4,
        imageUrl: '/images/art-04.jpg'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};
