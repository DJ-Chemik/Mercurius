import {AuctionSite} from "./AuctionSitesManagement";

export const validateName = (auctionSites: AuctionSite[], item: AuctionSite) => {
  if(!item.name) return false
  return !auctionSites.some(auction => auction.name === item.name)
}

export function deleteAucitonSite(auctionSites: AuctionSite[], auctionSiteName: string) {
  auctionSites = [...auctionSites.filter((element: AuctionSite) => {
    return element.name !== auctionSiteName
  })]
  return auctionSites;
}