import { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { v4 as uuid_v4 } from "uuid";
import Button from "../../UI/Button/Button";
import Header from "../../UI/Header/Header";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import EditTabs from "../../UI/Tabs/EditTabs/EditTabs";
import Tabs from "../../UI/Tabs/Tabs";
import { APP_PAGE } from "../App";
import { HelpStyled } from "./Help.styled";



/* ONLY FOR DEVELOPING PROCESS */
const sampleElements = [
    { id: uuid_v4(), name: "Allegro", content: "In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman." },
    { id: uuid_v4(), name: "Amazon", content: "Amazon is cool"},
];

/* END OF DEVELOPER SECTION */

export interface PackageData {
    id: string;
    name: string;
    content: string;
};

const Help = () => {
    //States
    const [elements, setElements] = useState<PackageData[]>(sampleElements);

    //parameter just for testing
    const addElementHandler = () => {

        const request = {
            id: uuid_v4(),
            name: "New Element",
            content: "New Content",
        }
        setElements([...elements, request]);
    };

    const updateElementHandler = (element: PackageData) => {
        const { id, name, content } = element;

        //change values after update
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].id === id) {
                elements[i].name = name;
                elements[i].content = content;
            }
        }
    }

    return (
        <HelpStyled>
            <Header />
            <Router>
                <Switch>
                    <Route path={APP_PAGE.HELP} render={(props) => (<Tabs packageData={elements} addElementHandler={addElementHandler} />)} />
                    <Route path='/edit' render={(props) => (<EditTabs {...props} updateElementHandler={updateElementHandler} />)} />
                </Switch>
            </Router>
            <RouteLink to={APP_PAGE.HOME}>
                <Button title="Powrót do strony głównej" />
            </RouteLink>
        </HelpStyled>


    )
}

export default Help;