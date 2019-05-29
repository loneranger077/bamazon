'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    
      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Products', [
     {
     product_name: 'laptop case',
     department_name: 'computer accessories',
     price: 19.99,
     stock_quantity: 20,
     createdAt: '2011-07-01',
     updatedAt: '2011-07-01'
   },
  {
    product_name: 'Android charger',
    department_name: 'phone accessories',
    price: 9.99,
    stock_quantity: 15,
    createdAt: '2011-07-01',
    updatedAt: '2011-07-01'
  },
{
  product_name: 'iPhone charger',
department_name: 'phone accessories',
price: 16.99,
stock_quantity: 25,
createdAt: '2011-07-01',
updatedAt: '2011-07-01'
},
{
  product_name: 'printer ink',
  department_name: 'computer accessories',
  price: 29.99,
  stock_quantity: 20,
  createdAt: '2011-07-01',
  updatedAt: '2011-07-01'
},
{
  product_name: 'MacBook charger',
  department_name: 'computer accessories',
  price: 49.99,
  stock_quantity: 15,
  createdAt: '2011-07-01',
  updatedAt: '2011-07-01'
},
{
  product_name: 'Dell charger',
  department_name: 'computer accessories',
  price: 29.99,
  stock_quantity: 25,
  createdAt: '2011-07-01',
  updatedAt: '2011-07-01'
},
{
  product_name: 'Xbox One controller',
  department_name: 'gaming',
  price: 39.99,
  stock_quantity: 20,
  createdAt: '2011-07-01',
  updatedAt: '2011-07-01'
},
{
  product_name: 'PS4 controller',
  department_name: 'gaming',
  price: 35.99,
  stock_quantity: 20,
  createdAt: '2011-07-01',
  updatedAt: '2011-07-01'
},
{
  product_name: 'Balexa',
  department_name: 'AI assistant',
  price: 79.99,
  stock_quantity: 40,
  createdAt: '2011-07-01',
  updatedAt: '2011-07-01'
},
{
  product_name: 'fuzzy dice',
  department_name: 'car accessories',
  price: 12.99,
  stock_quantity: 20,
  createdAt: '2011-07-01',
  updatedAt: '2011-07-01'
}
], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Products', null, {});
  }
};
