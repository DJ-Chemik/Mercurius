import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
<<<<<<< HEAD
  constructor(private readonly appService: AppService) { }
=======

  constructor(private readonly appService: AppService) {}
>>>>>>> feature/RDT-15

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
