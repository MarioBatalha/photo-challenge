import { Knex } from 'knex';

interface Product {
    id: number;
    image_url: string;
  }

export async function up(knex: Knex) {
    return knex.schema.createTable('products', table => {
        table.increments('id').primary();
        table.string('image_url', 100).notNullable();
    });
}

export async function down (knex: Knex) {
    return knex.schema.dropTable('product');
}