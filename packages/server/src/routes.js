const express = require('express');

const productsController = require('./Controllers/ProductsController');
const favoritesController = require('./Controllers/FavoritesController');

const routes = express.Router();

// productsController
routes.get('/products', productsController.get);
// / productsController

// favoritesController
routes.get('/favorites', favoritesController.get);
routes.post('/favorites', favoritesController.post);
// /favoritesController


module.exports = routes;
