import { Injectable } from '@nestjs/common';
import { knexConnection } from '../db/knex/knexConnection';

@Injectable()
export class CategoriesDao {
  private readonly knex = knexConnection;

  async findAll(): Promise<any[]> {
    return this.knex('categories').select('*');
  }

  async findOne(id: number): Promise<any> {
    return this.knex('categories').where('id', id).first();
  }

  async create(category: any): Promise<any> {
    const [createdCategory] = await this.knex('categories').insert(category).returning('*');
    return createdCategory;
  }

  async update(id: number, category: any): Promise<any> {
    const [updatedCategory] = await this.knex('categories').where('id', id).update(category).returning('*');
    return updatedCategory;
  }

  async delete(id: number): Promise<void> {
    await this.knex('categories').where('id', id).del();
  }
}
