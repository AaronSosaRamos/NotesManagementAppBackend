import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { CategoriesDao } from './categories.dao';

@Module({
  providers: [CategoriesService, CategoriesDao],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
