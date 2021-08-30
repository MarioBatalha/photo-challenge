import { Knex } from 'knex';
interface Product {
    id: number;
    image_url: string;
  }

export async function seed (knex: Knex) {
    await knex('products').insert([
        { image_url: 'Imagem de teste' },
        { image_url: 'cartão de visita' }
    ])
}