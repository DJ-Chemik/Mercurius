import React from "react";

function crudFunctions(auctionSites: any, action: string, item: any) {

  switch (action) {

    case("add"): {
      if (!auctionSites.includes(item)) {
        auctionSites = [...auctionSites, item]
      } else {
        alert("Wartość nie może być pusta ani się powtarzać")
      }
      break;
    }

    case ("delete"): {
      auctionSites = [...auctionSites.filter(function (element: any) {
        return element !== item
      })]
      break;
    }

    default: {
      console.log("Nieprawidłowa opcja w CRUD!");
      break;
    }
  }

  return auctionSites

}

export default crudFunctions