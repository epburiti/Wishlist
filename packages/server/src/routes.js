const express = require('express');

const productsController = require('./Controllers/ProductsController');
const favoritesController = require('./Controllers/FavoritesController');

const routes = express.Router();

routes.get('/products', productsController.get);

routes.get('/favorites', favoritesController.get);
routes.post('/favorites', favoritesController.post);
routes.delete('/favorites/:favoritesId', favoritesController.delete);

module.exports = routes;
