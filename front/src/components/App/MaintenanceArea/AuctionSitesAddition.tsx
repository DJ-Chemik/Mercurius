import React from "react";
import {existsThisName} from "./Utils";
import {AuctionSite} from "./AuctionSitesManagement";

export interface AuctionSitesInterface {
  setAuctionsSites: React.Dispatch<React.SetStateAction<AuctionSite[]>>;
  auctionsSites: AuctionSite[];

  FormValues?: {
    setCurrentName: React.Dispatch<React.SetStateAction<string>>,
    currentName: string,
  }
}


const AuctionSitesAddition = (props: AuctionSitesInterface) => {

  const addElement = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newAuction: AuctionSite = {
      name: props.FormValues?.currentName || "null"
    }

    const result = () => {
      if (!existsThisName(props.auctionsSites, newAuction) && newAuction.name !== "null") {
        return [...props.auctionsSites, newAuction]
      } else {
        alert("Wartość nie może być pusta ani się powtarzać")
      }
      return [...props.auctionsSites]
    }

    props.setAuctionsSites([...result()])
    props.FormValues?.setCurrentName("")
  }

  const updateCurrentName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.FormValues?.setCurrentName(e.target.value)
  }

  return (
      <div>
        <form onSubmit={addElement}>
          <label> Nazwa portalu </label>
          <input type={"text"}
                 name={""}
                 placeholder={""}
                 value={props.FormValues?.currentName}
                 onChange={updateCurrentName}
          />
          <button>Dodaj</button>
        </form>
      </div>
  )
}

export default AuctionSitesAddition