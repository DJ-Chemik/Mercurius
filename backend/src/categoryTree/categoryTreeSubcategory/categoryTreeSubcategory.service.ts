import { Injectable } from '@nestjs/common';
import { CategoryTreeSubcategory, Prisma, PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

const prisma = new PrismaClient({});

@Injectable()
export class CategoryTreeSubcategoryService {
  constructor(private prisma: PrismaService) {}

  async getSubcategories() {
    return prisma.categoryTreeSubcategory.findMany();
  }

  async getSubcategory(id: string): Promise<string | CategoryTreeSubcategory> {
    try {
      return prisma.categoryTreeSubcategory.findFirst({
        where: {
          id: +id,
        },
      });
    } catch (error) {
      return 'Error during selecting subcategory by id: ${id}';
    }
  }

  async createSubcategory(
    data: Prisma.CategoryTreeSubcategoryCreateInput,
  ): Promise<CategoryTreeSubcategory> {
    return this.prisma.categoryTreeSubcategory.create({
      data,
    });
  }

  async deleteSubcategory(
    id: string,
  ): Promise<string | CategoryTreeSubcategory> {
    try {
      return await this.prisma.categoryTreeSubcategory.delete({
        where: {
          id: +id,
        },
      });
    } catch (error) {
      return 'Error during deleting subcategory by id: ${id}';
    }
  }
}
