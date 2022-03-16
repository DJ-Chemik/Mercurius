import React from "react";
import ListAuctions from "./ListAuctions";
import {stringify} from "querystring";

class AddPortal extends React.Component{
    state = {
        name: '',
        auctions: [""]
    }

    cleanTrash = (auction: string[]) =>{
        let temp : string[] = []

        auction.forEach(function (item, index) {
            if(item !== "" && item !== undefined ){
                temp.push(item)
            }
        })
        console.log("Wyczysczone!")
        console.log(temp)
        return temp
    }

    handleChange = (e: { preventDefault: () => void; target: { value: any; }; }) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            name: e.target.value
        })
    }

    handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        if(this.state.auctions.includes(this.state.name)){
            console.log("Zawiera już!")
            alert("Aukcja o takiej nazwie już istnieje!")
            this.setState({
                ...this.state,
                name: ""
            })
            return;
        }

        if (this.state.name === ""){
            alert("Nazwa nie może być pusta!");
            return;
        }

        this.setState({
            auctions : [...this.state.auctions.filter(function (element){return element !== undefined}), this.state.name],
            name: "",
        })
        console.log(this)
        return
    }

    render() {
        return (
            <div>
                <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Nazwa aukcji </label>
                    <input type={"text"}
                           name={""}
                           placeholder={"Name"}
                           value={this.state.name}
                           onChange={this.handleChange}
                           />
                    <button >Add</button>
                </form>
                </div>
                <ListAuctions auctions={this.state.auctions}/>
            </div>

        )
    }
}

export default AddPortal