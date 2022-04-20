import React from "react";
import {deleteAucitonSite} from "./Utils";
import {AuctionSite} from "./AuctionSitesManagement";
import {AuctionSitesInterface} from './AuctionSitesAddition'

const AuctionSitesList = (auctionInterface: AuctionSitesInterface) => {

  const handleDeletion = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    auctionInterface.setAuctionsSites([...deleteAucitonSite(auctionInterface.auctionsSites, e.currentTarget.value)])
  }

  return (
      <ul>
        {auctionInterface.auctionsSites.map((item: AuctionSite) => {
              if (!item) {
                return false
              }
              return (
                  <li key={item.name}>
                    {item.name}
                    <button onClick={handleDeletion} value={item.name}>Usuń</button>
                  </li>
              );

            }
        )}
      </ul>
  )
}
export default AuctionSitesList