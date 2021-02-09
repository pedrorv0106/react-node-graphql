'use strict';

/* eslint-disable import/no-commonjs */
let crypto = require('crypto');
module.exports = {
  up: async queryInterface => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'users',
      [
        {
          spotifyId: '',
          nickname: 'admin',
          name: 'admin',
          email: 'admin@admin.com',
          avatar: 'boy1',
          points: 0,
          userId: 'admin',
          password: crypto.createHash('md5').update('admin').digest('hex'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async queryInterface => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
