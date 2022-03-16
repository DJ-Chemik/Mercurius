import { Controller, Get } from '@nestjs/common';
import { AuctionSiteService } from './auctionSite.service';

@Controller('auctionsites')
export class AuctionSiteController {
  constructor(private readonly appService: AuctionSiteService) {}

  @Get('hello')
  getAuctionSite(): string {
    return this.appService.getAuctionSite();
  }
}
