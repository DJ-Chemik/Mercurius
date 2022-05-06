import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuctionSiteModule } from './auctionSite/auctionSite.module';
import { ProductsModule } from './products/products.module';
import { CategoryTreeModule } from './categoryTree/categoryTree.module';
import { CategoryTreeSubcategoryModule } from './categoryTree/categoryTreeSubcategory/categoryTreeSubcategory.module';
import { CategoryTreeSubcategoryItemModule } from './categoryTree/categoryTreeSubcategoryItem/categoryTreeSubcategoryItem.module';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    AuctionSiteModule,
    ProductsModule,
    CategoryTreeModule,
    CategoryTreeSubcategoryModule,
    CategoryTreeSubcategoryItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
