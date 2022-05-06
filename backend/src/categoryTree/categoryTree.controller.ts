import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CategoryTreeService } from './categoryTree.service';

@Controller('categories')
export class CategoryTreeController {
  constructor(private categoryTreeService: CategoryTreeService) {}

  @Get()
  getCategories() {
    return this.categoryTreeService.getCategories();
  }

  @Get(':id')
  getCategory(@Param('id') id: string) {
    return this.categoryTreeService.getCategory(id);
  }

  @Post()
  createCategory(@Body() body: Prisma.CategoryTreeCreateInput) {
    return this.categoryTreeService.createCategory(body);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: string) {
    return this.categoryTreeService.deleteCategory(id);
  }
}
