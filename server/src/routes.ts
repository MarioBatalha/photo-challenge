const express = require('express');

const { celebrate, Segments, Joi } = require('celebrate');
const routes = express.Router();

const controllerProducts = require('./controllers/controllersProducts');
import { Request, Response } from 'express';

//Routes
routes.get('/products', controllerProducts.index);

routes.post('/AddProduct', (req: Request , res: Response) => {
    console.log('Hello');
});

routes.delete('/RemoveProduct', controllerProducts.remove);

export default routes;