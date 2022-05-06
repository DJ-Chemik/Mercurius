import { Injectable } from '@nestjs/common';
import { Prisma, CategoryTree } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

const prisma = new PrismaClient({});

@Injectable()
export class CategoryTreeService {
  constructor(private prisma: PrismaService) {}

  async getCategories() {
    return prisma.categoryTree.findMany();
  }

  async getCategory(id: string): Promise<string | CategoryTree> {
    try {
      return prisma.categoryTree.findFirst({
        where: {
          id: +id,
        },
      });
    } catch (error) {
      return 'Error during selecting category by id: ${id}';
    }
  }

  async createCategory(
    data: Prisma.CategoryTreeCreateInput,
  ): Promise<CategoryTree> {
    return this.prisma.categoryTree.create({
      data,
    });
  }

  async deleteCategory(id: string): Promise<string | CategoryTree> {
    try {
      return await this.prisma.categoryTree.delete({
        where: {
          id: +id,
        },
      });
    } catch (error) {
      return 'Error during deleting category by id: ${id}';
    }
  }
}
