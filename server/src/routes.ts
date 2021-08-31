const express = require('express');

const { celebrate, Segments, Joi } = require('celebrate');
const routes = express.Router();

const { upload, uploadImage } = require('./controllers/controllerUpload');

const controllerProducts = require('./controllers/controllersProducts');

//Routes
routes.get('/products', controllerProducts.index);

routes.post('/AddProduct', controllerProducts.create, upload, uploadImage);

routes.delete('/RemoveProduct', controllerProducts.remove);

export default routes;