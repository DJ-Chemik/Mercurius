import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuctionSiteModule } from './auctionSite/auctionSite.module';
import { ProductsModule } from './products/products.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [UserModule, PrismaModule, AuctionSiteModule, ProductsModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
