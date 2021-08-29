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
        const { id, description, image_url } = req.body;       
        await connection('products').insert({
            id, description, image_url
        })
        return res.json({ id })
        
       } catch (error) {
           return res.status(400).send({ error: 'product upload failed'})
       }
    }
  }   
