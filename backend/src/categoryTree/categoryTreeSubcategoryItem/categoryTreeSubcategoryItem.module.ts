import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CategoryTreeSubcategoryItemController } from './categoryTreeSubcategoryItem.controller';
import { CategoryTreeSubcategoryItemService } from './categoryTreeSubcategoryItem.service';

@Module({
  imports: [PrismaModule],
  controllers: [CategoryTreeSubcategoryItemController],
  providers: [CategoryTreeSubcategoryItemService],
  exports: [CategoryTreeSubcategoryItemService],
})
export class CategoryTreeSubcategoryItemModule {}
