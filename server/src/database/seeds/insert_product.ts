import { Knex } from 'knex';

export async function seed (knex: Knex) {
    await knex('products').insert([
        { image_url: 'Imagem de teste' },
        { image_url: 'cartão de visita' }
    ])
}