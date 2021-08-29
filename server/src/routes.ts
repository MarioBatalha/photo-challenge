const express = require('express');

const { celebrate, Segments, Joi } = require('celebrate');
const routes = express.Router();

const controllerProducts = require('./controllers/controllerProducts');
const data = {
   name: 'Mario',
   nickname: 'Silva'
}
//Routes
routes.get('/products', controllerProducts.index);

routes.post('/addProduct', controllerProducts.create);

export default routes;