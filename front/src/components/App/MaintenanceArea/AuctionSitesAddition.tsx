import React from "react";
import {addAuctionSite} from "./Utils";
import {AuctionSite, AuctionSitesInterface, FormValues} from "./AuctionSitesManagement";

const AuctionSitesAddition = (props: { auctionInterface: AuctionSitesInterface, currentInput: FormValues }) => {

  const addElement = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const newAuction: AuctionSite = {
      name: props.currentInput.currentName
    }
    props.auctionInterface.setAuctionSites([...addAuctionSite(props.auctionInterface.auctionSites, newAuction)])
    props.currentInput.setCurrentName("")
  }

  const updateCurrentName = (e: { preventDefault: () => void; target: { value: string; }; }) => {
    e.preventDefault();
    props.currentInput.setCurrentName(e.target.value)
  }

  return (
      <div>
        <form onSubmit={addElement}>
          <label> Nazwa portalu </label>
          <input type={"text"}
                 name={""}
                 placeholder={""}
                 value={props.currentInput.currentName}
                 onChange={updateCurrentName}
          />
          <button>Dodaj</button>
        </form>
      </div>
  )
}

export default AuctionSitesAddition