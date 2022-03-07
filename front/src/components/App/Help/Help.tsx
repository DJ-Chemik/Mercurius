import { useEffect, useState } from "react";
import {v4 as uuid_v4} from "uuid";
import Button from "../../UI/Button/Button";
import Header from "../../UI/Header/Header";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import Tabs from "../../UI/Tabs/Tabs";
import { APP_PAGE } from "../App";
import { HelpStyled } from "./Help.styled";

//Just for testing
export interface PackageData {
    id: string;
    name: string;
    content: string;
};

const Help = () => {
    //Variables
    const LOCAL_STORAGE_KEY = 'elements';

    //States
    const [elements, setElements] = useState<PackageData[]>([]);

    //parameter just for testing
    const addElementHandler = (name="Test") =>{

        const request = {
            id: uuid_v4(),
            name: "Allegro",
            content: "Ale fajnie",
        }
        console.log(request);
        setElements([...elements, request]);
    };

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(elements))
    }, [elements]);

    return (
        <HelpStyled>
          <Header/>
            <Tabs packageData={elements} addElementHandler = {addElementHandler}/>
            <RouteLink to={APP_PAGE.HOME}>
                <Button title="Powrót do strony głównej" />
            </RouteLink>
        </HelpStyled>
    )
}

export default Help;