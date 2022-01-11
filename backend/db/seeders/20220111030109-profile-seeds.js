'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Profiles', [
      {
        userId: 3,
        fullName: 'Fiona Choi',
        location: 'Bae Area',
        description: "I'm not a tattoo artist.",
        specialties: ['not crying when getting tatted']
      },
      {
        userId: 4,
        fullName: 'Grace Noelle',
        location: 'Riverside',
        description: 'Hit me up for some SWEET TATS.',
      },
      {
        userId: 1,
        fullName: 'Demo User',
        location: 'The Matrix',
        description: "What is my purpose?",
        specialties: ['machine learning']
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
