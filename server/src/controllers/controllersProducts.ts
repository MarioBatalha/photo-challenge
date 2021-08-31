import { Request, Response } from 'express';

import connection from '../database/connection';

module.exports = {
    async index(req: Request, res: Response) {
    const products = await connection('products').select('*')

    if(!products){
        return res.status(401).send({ error: 'No products available'})
    }
        return res.json(products);
    },

    async create(req: Request, res: Response) {
       try {
        const image_url= req.body;        

        const imageExists = await connection('products').where('image_url', image_url).first(); 
        
        if(!imageExists){
            return res.status(400).send({ error: 'This image already exist'})
        }
       
        const product = await connection('products').insert(req.body);

        return res.json(`Product ${product} was successful uploaded`);
    } catch (error) {
           return res.status(400).send({ error: 'Image upload failed'})
       }
    },

    async remove(req: Request, res: Response) {
        try {
         const { id } = req.body;
         
        const product = await connection('products').where('id', id).del();

         return res.json(`Product was deleted`);
        } catch (error) {
            return res.status(400).send({ error: `You cant´t delete image with id`})
        }
     }
  }   
