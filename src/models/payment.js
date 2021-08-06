'use strict';
import {Model} from 'sequelize'

export default (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Payment.init({
    rentalId: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    payment_date: DataTypes.DATE,
    adminId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};