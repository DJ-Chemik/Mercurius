import { Controller, Get } from '@nestjs/common';
import { AuctionSiteService } from './auctionSite.service';

@Controller()
export class AuctionSiteController {
  constructor(private readonly appService: AuctionSiteService) {}

  @Get()
  getAuctionSite(): string {
    return this.appService.getAuctionSite();
  }
}
