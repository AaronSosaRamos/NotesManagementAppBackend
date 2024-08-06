import { Injectable } from '@nestjs/common';
import { CategoriesDao } from './categories.dao';
import { CreateCategoryDto } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesDao: CategoriesDao) {}

  findAll() {
    return this.categoriesDao.findAll();
  }

  findOne(id: number) {
    return this.categoriesDao.findOne(id);
  }

  create(category: CreateCategoryDto) {
    return this.categoriesDao.create(category);
  }

  update(id: number, category: CreateCategoryDto) {
    return this.categoriesDao.update(id, category);
  }

  delete(id: number) {
    return this.categoriesDao.delete(id);
  }
}
