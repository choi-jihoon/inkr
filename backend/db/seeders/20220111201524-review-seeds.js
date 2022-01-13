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
        reviewText: "Super chill.",
        rating: 5
      },
      {
        userId: 2,
        artistId: 1,
        reviewText: "You're not even real!!",
        rating: 1
      },
      {
        userId: 1,
        artistId: 5,
        reviewText: "Love their work, but lives too far...",
        rating: 4
      },
      {
        userId: 1,
        artistId: 2,
        reviewText: "I flew all the way to Korea to get tatted by her and it was worth.",
        rating: 5
      },
      {
        userId: 1,
        artistId: 3,
        reviewText: "Nice tats.",
        rating: 3
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});

  }
};
