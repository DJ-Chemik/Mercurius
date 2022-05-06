import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CategoryTreeSubcategoryItemService } from './categoryTreeSubcategoryItem.service';

@Controller('items')
export class CategoryTreeSubcategoryItemController {
  constructor(
    private categoryTreeSubcategoryItemService: CategoryTreeSubcategoryItemService,
  ) {}

  @Get()
  getItems() {
    return this.categoryTreeSubcategoryItemService.getItems();
  }

  @Get(':id')
  getItem(@Param('id') id: string) {
    return this.categoryTreeSubcategoryItemService.getItem(id);
  }

  @Post()
  createItem(@Body() body: Prisma.CategoryTreeSubcategoryItemCreateInput) {
    return this.categoryTreeSubcategoryItemService.createItem(body);
  }

  @Delete(':id')
  deleteItem(@Param('id') id: string) {
    return this.categoryTreeSubcategoryItemService.deleteItem(id);
  }
}
