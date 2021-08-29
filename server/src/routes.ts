const express = require('express');

const { celebrate, Segments, Joi } = require('celebrate');
const routes = express.Router();

const controllerProducts = require('./controllers/controllersProducts');

//Routes
routes.get('/products', controllerProducts.index);

routes.post('/AddProduct', controllerProducts.create);

routes.post('/RemoveProduct', controllerProducts.create);

export default routes;