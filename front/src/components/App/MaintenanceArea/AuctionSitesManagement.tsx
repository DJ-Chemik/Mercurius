import React, {useState} from "react";
import AuctionSitesList from "./AuctionSitesList";
import AuctionSitesAddition from "./AuctionSitesAddition";

const AuctionSitesManagement = () => {

  const [name, setName] = useState("")
  const [auctionSites, setAuctionSites] = useState([""])

  return (
      <div>
        <AuctionSitesAddition setAuctionSites={setAuctionSites} auctionSites={auctionSites} setName={setName}
                              name={name}/>
        <AuctionSitesList setAuctionSites={setAuctionSites} auctionSites={auctionSites}/>
      </div>
  )
}

export default AuctionSitesManagement
