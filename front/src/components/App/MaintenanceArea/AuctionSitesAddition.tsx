import React from "react";
import crudFunctions from "./Utils";

const auctionSitesAddition = (props: { setAuctionSites: (arg0: any[]) => void; auctionSites: any; setName: (arg0: any) => void; name: any }) => {

  const addElement = (e: any) => {
    e.preventDefault();
    props.setAuctionSites([...crudFunctions(props.auctionSites, "add", props.name)])
    props.setName("")
  }

  return (
      <div>
        <form onSubmit={addElement}>
          <label> Nazwa portalu </label>
          <input type={"text"}
                 name={""}
                 placeholder={"Name"}
                 value={props.name}
                 onChange={(e) => {
                   e.preventDefault();
                   props.setName(e.target.value)
                 }}
          />
          <button>Add</button>
        </form>
      </div>
  )
}
export default auctionSitesAddition