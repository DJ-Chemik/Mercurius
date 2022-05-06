import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CategoryTreeSubcategoryService } from './categoryTreeSubcategory.service';

@Controller('subcategories')
export class CategoryTreeSubcategoryController {
  constructor(
    private categoryTreeSubcategoryService: CategoryTreeSubcategoryService,
  ) {}

  @Get()
  getCategories() {
    return this.categoryTreeSubcategoryService.getSubcategories();
  }

  @Get(':id')
  getCategory(@Param('id') id: string) {
    return this.categoryTreeSubcategoryService.getSubcategory(id);
  }

  @Post()
  createCategory(@Body() body: Prisma.CategoryTreeSubcategoryCreateInput) {
    return this.categoryTreeSubcategoryService.createSubcategory(body);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: string) {
    return this.categoryTreeSubcategoryService.deleteSubcategory(id);
  }
}
