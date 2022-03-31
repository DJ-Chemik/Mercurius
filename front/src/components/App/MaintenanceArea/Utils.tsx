import React from "react";
import {AuctionSite} from "./AuctionSitesManagement";

const existsThisName = (auctionSites: AuctionSite[], item: AuctionSite) => {
  if (!auctionSites || item.name === "")
    return true
  for (let i = 0; i < auctionSites.length; i++) {
    if (auctionSites[i].name === item.name) {
      return true
    }
  }
  return false
}

export function addAuctionSite(auctionSites: AuctionSite[], item: AuctionSite) {
  if (!existsThisName(auctionSites, item)) {
    if (auctionSites) {
      auctionSites = [...auctionSites, item]
    } else {
      auctionSites = [item]
    }
  } else {
    alert("Wartość nie może być pusta ani się powtarzać")
  }
  return auctionSites;
}

export function deleteAucitonSite(auctionSites: AuctionSite[], item: AuctionSite) {
  auctionSites = [...auctionSites.filter(function (element: AuctionSite) {
    return element.name !== item.name
  })]
  return auctionSites;
}