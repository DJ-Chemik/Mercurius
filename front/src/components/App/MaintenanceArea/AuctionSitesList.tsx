import React from "react";
import {deleteAucitonSite} from "./Utils";
import {AuctionSite} from "./AuctionSitesManagement";
import {AuctionSitesProps} from './AuctionSitesAddition'

const AuctionSitesList = (props: AuctionSitesProps) => {

  const confirmedDeletion = (auctionSiteName: string) =>{
    return window.confirm("Na pewno chcesz usunąć stronę aukcyjną o nazwie "+ auctionSiteName+
        " oraz wszystkie dane z nią powiązane?")
  }

  const handleDeletion = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const auctionSiteName = e.currentTarget.value

    if (confirmedDeletion(auctionSiteName)){
      const deletionResult = deleteAucitonSite(props.auctionsSites,  auctionSiteName)
      props.setAuctionsSites([...deletionResult])
    }
  }

  return (
      <ul>
        {props.auctionsSites.map((item: AuctionSite) => {
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