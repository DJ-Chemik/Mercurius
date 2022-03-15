import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuctionSiteModule } from './auctionSite/auctionSite.module';

@Module({
  imports: [UserModule, PrismaModule, AuctionSiteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
