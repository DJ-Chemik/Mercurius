import { Injectable } from '@nestjs/common';

@Injectable()
export class AuctionSiteService {
  getAuctionSite(): string {
    return 'WITAJ NA PORTALACH AUKCYJNYCH';
  }
}
