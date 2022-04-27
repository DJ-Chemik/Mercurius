import React from "react";
import {AuctionSite} from "./AuctionSitesManagement";

interface Props {
  setAuctionsSites: Function,
  changeInput: Function,
  currentName: string,
  validation: Function,

}


const AuctionSitesAddition = (props: Props) => {


  const addElement = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newAuction: AuctionSite = {
      name: props.currentName
    }

    if (props.validation(newAuction)) {
      props.setAuctionsSites(newAuction)
    } else {
      alert("Wartość nie może być pusta ani się powtarzać")
    }

    props.changeInput("")
  }

  const updateCurrentName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.changeInput(e.target.value)
  }

  return (
      <div>
        <form onSubmit={addElement}>
          <label> Nazwa portalu </label>
          <input
              type={"text"}
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