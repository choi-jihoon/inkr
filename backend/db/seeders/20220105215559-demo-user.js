'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'banul.world@gmail.com',
        username: 'Tattooist_banul',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'fiona@fiona.com',
        username: 'FionAH',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'grey@grey.com',
        username: 'greyn0elle',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'dani@ginzburg.com',
        username: 'dginzburg',
        hashedPassword: bcrypt.hashSync('password'),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'Tattooist_banul', 'FionAH', 'greyn0elle', 'dginzburg'] }
    }, {});
  }
};
