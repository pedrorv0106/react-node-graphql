'use strict';
import { Model } from 'sequelize';

/* eslint-disable import/no-commonjs */
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.dj_list, { foreignKey: 'djUserId' });
      User.hasMany(models.listen_list, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      spotifyId: DataTypes.STRING,
      nickname: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      avatar: DataTypes.STRING,
      points: DataTypes.INTEGER,
      userId: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'user',
    },
  );
  return User;
};
