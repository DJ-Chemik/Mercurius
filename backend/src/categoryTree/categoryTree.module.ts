import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CategoryTreeController } from './categoryTree.controller';
import { CategoryTreeService } from './categoryTree.service';

@Module({
  imports: [PrismaModule],
  controllers: [CategoryTreeController],
  providers: [CategoryTreeService],
  exports: [CategoryTreeService],
})
export class CategoryTreeModule {}
