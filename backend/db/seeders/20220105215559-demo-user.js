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
        email: 'demo@demo.com',
        username: 'Demo',
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
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'Demo', 'FionAH', 'greyn0elle'] }
    }, {});
  }
};
