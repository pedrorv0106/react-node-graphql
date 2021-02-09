'use strict';
import { Model } from 'sequelize';

/* eslint-disable import/no-commonjs */
module.exports = (sequelize, DataTypes) => {
  class DJList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DJList.belongsTo(models.user, { foreignKey: { name: 'djUserId' } });
    }
  }
  DJList.init(
    {
      djUserId: DataTypes.INTEGER,
      roomId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'dj_list',
    },
  );
  return DJList;
};
