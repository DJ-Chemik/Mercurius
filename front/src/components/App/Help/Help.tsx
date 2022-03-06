import { useState } from "react";
import {v4 as uuid_v4} from "uuid";
import Button from "../../UI/Button/Button";
import Header from "../../UI/Header/Header";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import Tabs from "../../UI/Tabs/Tabs";
import { APP_PAGE } from "../App";
import { HelpStyled } from "./Help.styled";



//Just for testing

const Help = () => {
    //States
    const [elements, setElements] = useState(["Allegro", "Olx", "Amazon", "e-Bay"]);

    //parameter just for testing
    const addElementHandler = (name="Test") =>{
        setElements([...elements, name]);
    };

    return (
        <HelpStyled>
          <Header/>
            <Tabs names={elements} addElementHandler = {addElementHandler}/>
            <RouteLink to={APP_PAGE.HOME}>
                <Button title="Powrót do strony głównej" />
            </RouteLink>
        </HelpStyled>
    )
}

export default Help;