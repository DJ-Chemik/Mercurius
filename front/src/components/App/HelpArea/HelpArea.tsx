import Button from "../../UI/Button/Button";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { APP_PAGE } from "../App";
import { HelpAreaStyled } from "./HelpArea.styled";
import HelpAreaInput from "./HelpArea.input";

const HelpArea = () => {
  return (
    <HelpAreaStyled>
      <RouteLink to={APP_PAGE.HOME}>
        <Button title="Powrót do strony głównej" />
      </RouteLink>
      <HelpAreaInput />
    </HelpAreaStyled>
  )
}

export default HelpArea;