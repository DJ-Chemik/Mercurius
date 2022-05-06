import { Injectable } from '@nestjs/common';
import {
  CategoryTreeSubcategoryItem,
  Prisma,
  PrismaClient,
} from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

const prisma = new PrismaClient({});

@Injectable()
export class CategoryTreeSubcategoryItemService {
  constructor(private prisma: PrismaService) {}

  async getItems() {
    return prisma.categoryTreeSubcategoryItem.findMany();
  }

  async getItem(id: string): Promise<string | CategoryTreeSubcategoryItem> {
    try {
      return prisma.categoryTreeSubcategoryItem.findFirst({
        where: {
          id: +id,
        },
      });
    } catch (error) {
      return 'Error during selecting item by id: ${id}';
    }
  }

  async createItem(
    data: Prisma.CategoryTreeSubcategoryItemCreateInput,
  ): Promise<CategoryTreeSubcategoryItem> {
    return this.prisma.categoryTreeSubcategoryItem.create({
      data,
    });
  }

  async deleteItem(id: string): Promise<string | CategoryTreeSubcategoryItem> {
    try {
      return await this.prisma.categoryTreeSubcategoryItem.delete({
        where: {
          id: +id,
        },
      });
    } catch (error) {
      return 'Error during deleting item by id: ${id}';
    }
  }
}
