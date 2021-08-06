'use strict';

import {Model} from 'sequelize'

export default (sequelize, DataTypes) => {
  class Rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Rental.init({
    rental_date: DataTypes.DATE,
    return_date: DataTypes.DATE,
    ownerId: DataTypes.INTEGER,
    carId: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rental',
  });
  return Rental;
};