import { Knex } from 'knex';
import * as bcrypt from 'bcrypt';
import { env } from '../../env';

export async function up(knex: Knex): Promise<void> {
  const saltRounds = 10;
  const password = env.PASSWORD;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  await knex('user').insert({
    email: env.EMAIL,
    password: hashedPassword,
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex('user').where('email', env.EMAIL).del();
}
