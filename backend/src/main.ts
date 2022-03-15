import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuctionSiteModule } from './auctionSite/auctionSite.module';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);
  await app.listen(4000);
}
bootstrap();

async function bootstrap2() {
  const auction = await NestFactory.create(AuctionSiteModule);
  const prismaService: PrismaService = auction.get(PrismaService);
  prismaService.enableShutdownHooks(auction);
  await auction.listen(5000);
}
bootstrap2();
