import React from "react";
import {AuctionSite} from "./AuctionSitesManagement";

export interface AuctionSitesProps {
  setAuctionsSites: React.Dispatch<React.SetStateAction<AuctionSite[]>>;
  auctionsSites: AuctionSite[];
}

const AuctionSitesList = (props: AuctionSitesProps) => {

  const confirmDeletion = (auctionSiteName: string) => {
    return window.confirm(`Na pewno chcesz usunąć stronę aukcyjną o nazwie "${auctionSiteName}" oraz wszystkie dane z nią powiązane?`)
  }

  const deleteAucitonSite = (auctionSites: AuctionSite[], auctionSiteName: string) => {
    return [...auctionSites.filter((element: AuctionSite) => {
      return element.name !== auctionSiteName
    })]
  }

  const handleDeletion = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const auctionSiteName = e.currentTarget.value

    if (confirmDeletion(auctionSiteName)) {
      const deletionResult = deleteAucitonSite(props.auctionsSites, auctionSiteName)
      props.setAuctionsSites([...deletionResult])
    }
  }

  return (
      <ul>
        {props.auctionsSites.map((item) => {
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