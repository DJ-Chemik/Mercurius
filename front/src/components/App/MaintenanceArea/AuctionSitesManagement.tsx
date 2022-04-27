import React, {useState} from "react";
import AuctionSitesList from "./AuctionSitesList";
import AuctionSitesAddition from "./AuctionSitesAddition";


export interface AuctionSite {
  name: string;
}

const AuctionSitesManagement = () => {
  const [inputName, setInputName] = useState("");
  const [auctionsSites, setAuctionsSites] = useState<AuctionSite[]>([]);

  const setInput = (value: String) => {
    setInputName(value.toString());
  }

  const validateName = (item: AuctionSite) => {
    if (!item.name) return false
    return !auctionsSites.some(auction => auction.name === item.name)
  }

  const updateAuctionSites = (auctionSite: AuctionSite) => {
    setAuctionsSites([...auctionsSites, auctionSite])
    setInput("")
  }

  return (
      <div>
        <AuctionSitesAddition setAuctionsSites={updateAuctionSites}
                              changeInput={setInput} currentName={inputName} validation={validateName}/>

        <AuctionSitesList setAuctionsSites={setAuctionsSites}
                          auctionsSites={auctionsSites}/>
      </div>
  )
}

export default AuctionSitesManagement

