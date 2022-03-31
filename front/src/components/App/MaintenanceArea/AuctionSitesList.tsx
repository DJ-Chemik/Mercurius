import React from "react";
import {deleteAucitonSite} from "./Utils";
import {AuctionSite, AuctionSitesInterface} from "./AuctionSitesManagement";

const AuctionSitesList = (auctionInterface: AuctionSitesInterface) => {
  return (
      <ul>
        {auctionInterface.auctionSites.map(function (item: AuctionSite) {
              if (!item) {
                return false
              } else {
                return (
                    <li key={item.name}>
                      {item.name}
                      <button onClick={(e) => {
                        e.preventDefault();
                        auctionInterface.setAuctionSites([...deleteAucitonSite(auctionInterface.auctionSites, item)])
                      }} value={item.name}>Usuń
                      </button>
                    </li>
                );
              }
            }
        )}
      </ul>
  )
}
export default AuctionSitesList