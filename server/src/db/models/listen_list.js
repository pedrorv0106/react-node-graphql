'use strict';
import { Model } from 'sequelize';

/* eslint-disable import/no-commonjs */
module.exports = (sequelize, DataTypes) => {
  class ListenList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ListenList.belongsTo(models.user, { foreignKey: { name: 'userId' } });
    }
  }
  ListenList.init(
    {
      roomId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      isQueue: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'listen_list',
    },
  );
  return ListenList;
};
