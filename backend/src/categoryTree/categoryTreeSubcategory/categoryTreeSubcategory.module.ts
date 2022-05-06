import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CategoryTreeSubcategoryController } from './categoryTreeSubcategory.controller';
import { CategoryTreeSubcategoryService } from './categoryTreeSubcategory.service';

@Module({
  imports: [PrismaModule],
  controllers: [CategoryTreeSubcategoryController],
  providers: [CategoryTreeSubcategoryService],
  exports: [CategoryTreeSubcategoryService],
})
export class CategoryTreeSubcategoryModule {}
