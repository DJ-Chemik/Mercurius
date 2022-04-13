import React, {useState} from "react";
import AuctionSitesList from "./AuctionSitesList";
import AuctionSitesAddition from "./AuctionSitesAddition";


export interface AuctionSite {
  name: string;
}

const AuctionSitesManagement = () => {
  const [inputName, setInputName] = useState("");
  const [auctionsSites, setAuctionsSites] = useState<AuctionSite[]>([]);

  return (
      <div>
        <AuctionSitesAddition setAuctionsSites={setAuctionsSites} auctionsSites={auctionsSites}
                              setCurrentName={setInputName} currentName={inputName}/>

        <AuctionSitesList setAuctionsSites={setAuctionsSites}
                          auctionsSites={auctionsSites}/>
      </div>
  )
}

export default AuctionSitesManagement
