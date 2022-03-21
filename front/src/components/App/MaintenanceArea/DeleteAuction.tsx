import React from "react";

const DeleteAuction = (auctions: string[], item: string) => {
    let auctionsCopy = [...auctions]
    auctions.forEach(function (item2, index) {
        if (item === item2) {
            auctionsCopy = [...auctions.slice(0, index), ...auctions.slice(index + 1,)]
        }
    })
    return auctionsCopy
}
export default DeleteAuction
