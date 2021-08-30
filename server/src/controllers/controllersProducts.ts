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
        const storage = multer.diskStorage({
            destination: function (req: any, file: any, cb: any) {
                cb(null, './uploads/')
            },
            
            filename: function (req: any, file: any, cb: any) {
                cb(null, file.originalname)
            }
        });

        const fileFilter = (req: any,file: any,cb: any) => {
            if(file.mimetype === "image/jpg"  || 
               file.mimetype ==="image/jpeg"  || 
               file.mimetype ===  "image/png"){
             
            cb(null, true);
           }else{
              cb(new Error("Image uploaded is not of type jpg/jpeg or png"),false);
        }
      }
        const upload = multer({storage: storage, fileFilter : fileFilter});

       const { image_url } = req.body;
        
        const imageUploadToDatabase = await connection('products').insert(req.body);

        return res.json(`{imageUploadToDatabase}Image was successful uploaded`);
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
