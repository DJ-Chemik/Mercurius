import React, {useState} from "react";
import AddAuction from "./AddAuction";
import DeleteAuction from "./DeleteAuction"

const ManageAuctions = () => {
    const [name, setName] = useState("")
    const [auctions, setAuctions] = useState([""])

    return (
        <div>
            <div>
                {/*Add auction section*/}
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setAuctions([...AddAuction(auctions, name)])
                    setName("")
                }}>
                    <label> Nazwa aukcji </label>
                    <input type={"text"}
                           name={""}
                           placeholder={"Name"}
                           value={name}
                           onChange={(e) => {
                               e.preventDefault();
                               setName(e.target.value)
                           }}
                    />
                    <button>Add</button>
                </form>
            </div>
            {/*Listing auction and handling with deletion*/}
            <ul>
                {auctions.map(function (item: string) {
                    if (item) {
                        return (
                            <li key={item}>
                                {item}
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    setAuctions([...DeleteAuction(auctions, item)])
                                }} value={item}>Usuń
                                </button>
                            </li>
                        );
                    }
                    return ""
                })}
            </ul>
        </div>
    )
}

export default ManageAuctions
