import {Request, Response} from 'express';
const multer = require('multer');

import connection from '../database/connection';

module.exports = {
    async index(req: Request, res: Response) {
    const products = await connection('products').select('*')

    if(!products){
        return res.status(401).send({ error: 'This product not exists'})
    }
        return res.json(products);
    },

    async create(req: Request, res: Response) {
       try {
        const { image_url } = req.body;        

        const imageExists = await connection('products').where('image_url', image_url).first(); 
        
        if(imageExists){
            return res.status(400).send({ error: 'This image already exist'})
        }

        const multerConfig = multer.diskStorage({
            destination: (req: Request, file: any, callback: any) => {
                callback(null, './src/public/images/products');
            }, filename(req: Request, file: any, callback: any)  {
                const ext = file.mimetype.split('/')[1];
                callback(null, `image.${Date.now()}.${ext}`)
            }
        });

        const isImage = (req: Request, file: any, callback: any) => {
            if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
                callback(null, true);
            }else{
                callback(new Error('Only jpeg and png images are allowed'), false);
            }
        }

        const upload = multer({
            storage: multerConfig,
            fileFilter: isImage,
        }).single('image_url');
        
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

        if(product) {
            return res.status(400).send({ error: 'Image already deleted'})
        }

         return res.json(`Product was deleted`);
        } catch (error) {
            return res.status(400).send({ error: 'You cant´t delete this image'})
        }
     }
  }   
