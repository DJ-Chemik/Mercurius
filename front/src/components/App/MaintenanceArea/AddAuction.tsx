import React from "react";

const AddAuction = (auctions: string[], newAuction: string) => {

    let auctionsCopy = [...auctions]
    if (newAuction && !auctions.includes(newAuction)) {
        auctionsCopy.filter(Boolean)
        auctionsCopy = [...auctions, newAuction]
        console.log("Dodano!")


    } else {
        alert("Wartość nie może być pusta oraz się powtarzać")
    }

    return auctionsCopy
}
export default AddAuction
