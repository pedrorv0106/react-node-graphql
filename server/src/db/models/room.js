'use strict';
import { Model } from 'sequelize';

/* eslint-disable import/no-commonjs */
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    // define association here
    // }
  }
  Room.init(
    {
      createUserId: DataTypes.INTEGER,
      createType: DataTypes.BOOLEAN,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'room',
    },
  );
  return Room;
};
