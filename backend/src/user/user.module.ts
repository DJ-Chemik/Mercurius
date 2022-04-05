import { Module } from '@nestjs/common';
import { AuctionSiteModule } from 'src/auctionSite/auctionSite.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProductsModule } from 'src/products/products.module';
import { UserService } from './user.service';

@Module({
  imports: [
    PrismaModule,
  ],
  controllers: [],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
