import { Controller, Get, Post, Param, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto, Category } from './category.entity';
import { validateOrReject } from 'class-validator';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, description: 'Return all categories.', type: [Category] })
  findAll() {
    return this.categoriesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get a category by ID' })
  @ApiResponse({ status: 200, description: 'Return a single category.', type: Category })
  @ApiParam({ name: 'id', description: 'The ID of the category to retrieve' })
  findOne(@Param('id') id: number) {
    return this.categoriesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new category' })
  @ApiResponse({ status: 201, description: 'The category has been successfully created.', type: Category })
  @ApiBody({ type: CreateCategoryDto })
  async create(@Body() category: CreateCategoryDto) {
    await validateOrReject(category);
    return this.categoriesService.create(category);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'Update a category by ID' })
  @ApiResponse({ status: 200, description: 'The category has been successfully updated.', type: Category })
  @ApiParam({ name: 'id', description: 'The ID of the category to update' })
  @ApiBody({ type: CreateCategoryDto })
  async update(@Param('id') id: number, @Body() category: CreateCategoryDto) {
    await validateOrReject(category);
    return this.categoriesService.update(id, category);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a category by ID' })
  @ApiResponse({ status: 200, description: 'The category has been successfully deleted.' })
  @ApiParam({ name: 'id', description: 'The ID of the category to delete' })
  delete(@Param('id') id: number) {
    return this.categoriesService.delete(id);
  }
}
