'use strict';
import Model from 'sequelize'

export default (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Car.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    year: DataTypes.STRING,
    brand: DataTypes.STRING,
    color: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER,
    rate: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};