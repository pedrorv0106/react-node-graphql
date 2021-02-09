'use strict';
import { Model } from 'sequelize';

/* eslint-disable import/no-commonjs */
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    // define association here
    // }
  }
  Playlist.init(
    {
      userId: DataTypes.INTEGER,
      roomId: DataTypes.INTEGER,
      previewUrl: DataTypes.STRING,
      spotifyUrl: DataTypes.STRING,
      songTitle: DataTypes.STRING,
      artistName: DataTypes.STRING,
      albumArt: DataTypes.STRING,
      orderNumber: DataTypes.INTEGER,
      seek: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      durationMs: DataTypes.INTEGER,
      updated: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'playlist',
    },
  );
  return Playlist;
};
