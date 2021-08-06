'use strict';

import {Model} from 'sequelize'

export default (sequelize, DataTypes) => {
  class CarImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  
  CarImage.init({
    name: DataTypes.STRING,
    carId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CarImage',
  });
  return CarImage;
};