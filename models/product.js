'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    product_name: DataTypes.STRING,
    department_name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    stock_quantity: DataTypes.INTEGER,
    createdAt:DataTypes.DATEONLY,
    updatedAt:DataTypes.DATEONLY
  });
  return Product;
};