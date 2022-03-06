import Button from "../../UI/Button/Button";
import Header from "../../UI/Header/Header";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import Tabs from "../../UI/Tabs/Tabs";
import { APP_PAGE } from "../App";
import { HelpStyled } from "./Help.styled";


const Help = () => {
    return (
        <HelpStyled>
          <Header/>
            <Tabs status="3"/>
            <RouteLink to={APP_PAGE.HOME}>
                <Button title="Powrót do strony głównej" />
            </RouteLink>
        </HelpStyled>
    )
}

export default Help;