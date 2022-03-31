import React, {useState} from "react";
import AuctionSitesList from "./AuctionSitesList";
import AuctionSitesAddition from "./AuctionSitesAddition";

export interface AuctionSite {
  name: string;
}

export interface AuctionSitesInterface {
  setAuctionSites: React.Dispatch<React.SetStateAction<AuctionSite[]>>;
  auctionSites: AuctionSite[];
}

export interface FormValues {
  setCurrentName: React.Dispatch<React.SetStateAction<string>>,
  currentName: string
}

const AuctionSitesManagement = () => {

  const [inputName, setInputName] = useState("")
  const [auctions, setAuctions] = useState<AuctionSite[]>([])


  return (
      <div>

        <AuctionSitesAddition auctionInterface={{setAuctionSites: setAuctions, auctionSites: auctions}}
                              currentInput={{currentName: inputName, setCurrentName: setInputName}}/>
        <AuctionSitesList setAuctionSites={setAuctions} auctionSites={auctions}/>
      </div>
  )
}

export default AuctionSitesManagement
