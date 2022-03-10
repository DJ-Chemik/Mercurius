import Button from "../../UI/Button/Button";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { APP_PAGE } from "../App";
import { HelpAreaStyled, HelpAreaNavStyled } from "./HelpArea.styled";
import HelpAreaInput from "./HelpArea.input";
import { HelpAreaInputStyled } from "./HelpArea.input.styled";
import logo from '../../../assets/logo.svg';

const HelpArea = () => {
  return (
    <HelpAreaStyled>

      <HelpAreaNavStyled>
        <img src={logo} alt = "logo"></img>
        <h2>Pomoc</h2>
        <img src={logo} alt = "logo"></img>
        <RouteLink to={APP_PAGE.HOME}>
          <Button title="Powrót do strony głównej" />
        </RouteLink>

      </HelpAreaNavStyled>

      <HelpAreaInputStyled>
        <HelpAreaInput />
      </HelpAreaInputStyled>
      
    </HelpAreaStyled>
  )
}

export default HelpArea;