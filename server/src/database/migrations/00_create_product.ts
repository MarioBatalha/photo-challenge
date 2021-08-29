import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('product', table => {
        table.increments('id').primary();
        table.string('description', 50).notNullable();
        table.string('image_url', 100).notNullable();
    });
}

export async function down (knex: Knex) {
    return knex.schema.dropTable('product');
}