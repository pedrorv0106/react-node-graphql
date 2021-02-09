'use strict';
/* eslint-disable import/no-commonjs */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /* eslint-disable max-lines-per-function */
    await queryInterface.createTable('playlists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      roomId: {
        type: Sequelize.INTEGER,
      },
      previewUrl: {
        type: Sequelize.STRING,
      },
      spotifyUrl: {
        type: Sequelize.STRING,
      },
      songTitle: {
        type: Sequelize.STRING,
      },
      artistName: {
        type: Sequelize.STRING,
      },
      albumArt: {
        type: Sequelize.STRING,
      },
      orderNumber: {
        type: Sequelize.INTEGER,
      },
      seek: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.BOOLEAN,
      },
      durationMs: {
        type: Sequelize.INTEGER,
      },
      updated: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('playlists');
  },
};
