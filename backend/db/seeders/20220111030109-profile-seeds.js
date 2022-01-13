'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Profiles', [
      {
        userId: 3,
        fullName: 'Fiona Choi',
        location: 'Bae Area',
        description: "I'm not a tattoo artist.",
        specialties: ['not crying when getting tatted'],
        profilePic: '/images/fionaprofpic.jpg'
      },
      {
        userId: 4,
        fullName: 'Grace Noelle',
        location: 'Riverside',
        description: 'Hit me up for some SWEET TATS.',
        profilePic: '/images/profpic-grace.PNG',
        specialties: ['dotwork', 'fine line']
      },
      {
        userId: 1,
        fullName: 'Demo User',
        location: 'The Matrix',
        description: "What is my purpose?",
        specialties: ['machine learning'],
        profilePic: '/images/default-pic.jpg'
      },
      {
        userId: 2,
        fullName: 'Tattooist Banul',
        location: 'Seoul, Korea',
        description: 'Instagram: tattooist_banul',
        profilePic: '/images/banulprof.JPG',
        specialties: ['watercolor', 'realism', 'fine-line']
      },
      {
        userId: 5,
        fullName: 'Dani Ginzburg',
        location: 'Israel',
        specialties: ['realism', 'abstract', 'portrait'],
        profilePic: '/images/default-pic.jpg'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Profiles', null, {});
  }
};
