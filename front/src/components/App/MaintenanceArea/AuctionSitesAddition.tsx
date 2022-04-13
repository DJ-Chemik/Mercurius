import React from "react";
import {validateName} from "./Utils";
import {AuctionSite} from "./AuctionSitesManagement";

export interface AuctionSitesProps {
  setAuctionsSites: React.Dispatch<React.SetStateAction<AuctionSite[]>>;
  auctionsSites: AuctionSite[];
}

export interface FormValues extends AuctionSitesProps{
  setCurrentName: React.Dispatch<React.SetStateAction<string>>,
  currentName: string,
}


const AuctionSitesAddition = (props: FormValues) => {

  const addElement = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newAuction: AuctionSite = {
      name: props.currentName
    }

    if(validateName(props.auctionsSites, newAuction)){
      props.setAuctionsSites([...props.auctionsSites, newAuction])
    }
    else {
      alert("Wartość nie może być pusta ani się powtarzać")
    }

    props.setCurrentName("")
  }

  const updateCurrentName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.setCurrentName(e.target.value)
  }

  return (
      <div>
        <form onSubmit={addElement}>
          <label> Nazwa portalu </label>
          <input type={"text"}
                 name={""}
                 placeholder={""}
                 value={props.currentName}
                 onChange={updateCurrentName}
          />
          <button type={"submit"}>Dodaj</button>
        </form>
      </div>
  )
}

export default AuctionSitesAddition