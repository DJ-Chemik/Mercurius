import React from "react";

const ListAuctions = (props: { auctions: any[]; }) =>{
    let auction = props.auctions;

    function deleteAuction (e: any) {
        e.preventDefault();
        auction.forEach(function (item, index){

            if(item === e.target.value){
                delete props.auctions[index];
                return
            }
        })
    }

    const auctions = (cpy:any) => (
        <ul>
            {cpy.map(function(item: any) {
                if (item !== undefined && item !=="") {
                return (
                    <li key={item}>
                        {item}
                        <button onClick={deleteAuction} value={item}>Usuń</button>
                    </li>
                );
            }
                else{
                    return " "
                }
            })}
        </ul>
    );

    return(
        <div>
            {auctions(auction)}
        </div>
    )
}
export default ListAuctions