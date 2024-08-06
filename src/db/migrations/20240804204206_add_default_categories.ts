import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex('categories').insert([
    { name: 'Work', color: 'bg-red-200' },
    { name: 'Personal', color: 'bg-green-200' },
    { name: 'Urgent', color: 'bg-blue-200' },
    { name: 'Others', color: 'bg-yellow-200' },
  ]);
}

export async function down(knex: Knex): Promise<void> {
  await knex('categories')
    .whereIn('name', ['Work', 'Personal', 'Urgent', 'Others'])
    .del();
}
