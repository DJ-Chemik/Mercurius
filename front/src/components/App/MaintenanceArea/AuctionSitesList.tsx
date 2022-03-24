import React from "react";
import crudFunctions from "./Utils";

const auctionSitesList = (props: { setAuctionSites: (arg0: any[]) => void; auctionSites: any }) => {

  return (
      <ul>
        {props.auctionSites.map(function (item: string) {
              if (!item) {
                return false
              } else {
                return (
                    <li key={item}>
                      {item}
                      <button onClick={(e) => {
                        e.preventDefault();
                        props.setAuctionSites([...crudFunctions(props.auctionSites, "delete", item)])
                      }} value={item}>Usuń
                      </button>
                    </li>
                );
              }
            }
        )}
      </ul>
  )
}
export default auctionSitesList
//