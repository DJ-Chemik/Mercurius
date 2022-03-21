import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import {UserModule} from "./user/user.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const usr = await NestFactory.create(UserModule);
  const prismaService: PrismaService = app.get(PrismaService);
  const prismaService2: PrismaService = usr.get(PrismaService);
  await prismaService.enableShutdownHooks(app)
  await prismaService2.enableShutdownHooks(usr)
  await app.listen(4000);
  await usr.listen(4001);
}
bootstrap();
