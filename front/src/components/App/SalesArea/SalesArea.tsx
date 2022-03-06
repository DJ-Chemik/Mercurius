import Button from "../../UI/Button/Button";
import Header from "../../UI/Header/Header";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { APP_PAGE } from "../App";
import { SalesAreaStyled } from "./SalesArea.styled";

const SalesArea = () => {
  return (
    <SalesAreaStyled>
      <Header />
        Sales Area
      <RouteLink to={APP_PAGE.HOME}>
        <Button title="Powrót do strony głównej" />
      </RouteLink>
    </SalesAreaStyled>
  )
}

export default SalesArea;