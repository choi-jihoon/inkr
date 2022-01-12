'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 3,
        artistId: 4,
        reviewText: "She's amazing! Only hurt a lot.",
        rating: 5
      },
      {
        userId: 1,
        artistId: 4,
        reviewText: "I love her work. She laughed when I cried though.",
        rating: 4
      },
      {
        userId: 2,
        artistId: 4,
        reviewText: "She's amazing! Only hurt a lot.",
        rating: 5
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});

  }
};
