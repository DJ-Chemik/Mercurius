import Button from "../../UI/Button/Button";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { APP_PAGE } from "../App";
import SalesAreaBackground from "./SalesAreaBackground";

const SalesArea = () => {
  return (
    <SalesAreaBackground>
      Sales Area
      <RouteLink to={APP_PAGE.HOME}>
        <Button title="Powrót do strony głównej" />
      </RouteLink>
    </SalesAreaBackground>
  )
}

export default SalesArea;