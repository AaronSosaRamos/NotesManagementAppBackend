import { Injectable } from '@nestjs/common';
import { knexConnection } from '../db/knex/knexConnection';

@Injectable()
export class UserDao {
  private readonly knex = knexConnection;

  async findByEmail(email: string): Promise<any> {
    return this.knex('user').where('email', email).first();
  }
}
