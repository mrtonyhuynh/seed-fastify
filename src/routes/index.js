// Import our Controllers
const paymeController = require('../controllers/paymeController');

// Import Swagger documentation
// const documentation = require('./documentation/carApi')

const routes = [
  {
    method: 'GET',
    url: '/api/posts',
    handler: paymeController.getPosts,
  },
  // {
  //   method: 'GET',
  //   url: '/api/cars/:id',
  //   handler: paymeController.getSingleCar
  // },
  // {
  //   method: 'POST',
  //   url: '/api/cars',
  //   handler: paymeController.addCar,
  //   // schema: documentation.addCarSchema
  // },
  // {
  //   method: 'PUT',
  //   url: '/api/cars/:id',
  //   handler: paymeController.updateCar
  // },
  // {
  //   method: 'DELETE',
  //   url: '/api/cars/:id',
  //   handler: paymeController.deleteCar
  // }
];

module.exports = routes;
