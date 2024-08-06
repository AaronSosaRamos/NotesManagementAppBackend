import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('notes', (table) => {
    table.increments('id').primary();
    table.integer('userId').unsigned().references('id').inTable('user').onDelete('CASCADE');
    table.string('title').notNullable();
    table.text('description').notNullable();
    table.boolean('isArchived').defaultTo(false);
    table.timestamps(true, true);
  });

  await knex.schema.createTable('notes_categories', (table) => {
    table.increments('id').primary();
    table.integer('noteId').unsigned().references('id').inTable('notes').onDelete('CASCADE');
    table.integer('categoryId').unsigned().references('id').inTable('categories').onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('notes_categories');
  await knex.schema.dropTable('notes');
}
