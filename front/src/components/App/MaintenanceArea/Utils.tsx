import {AuctionSite} from "./AuctionSitesManagement";

export const existsThisName = (auctionSites: AuctionSite[], item: AuctionSite) => {

  if (!auctionSites || item.name === "")
    return true

  const exists = auctionSites.map((element) => {
    return element.name === item.name;
  })
  return exists.includes(true)
}

export function deleteAucitonSite(auctionSites: AuctionSite[], item: string) {
  auctionSites = [...auctionSites.filter((element: AuctionSite) => {
    return element.name !== item
  })]
  return auctionSites;
}