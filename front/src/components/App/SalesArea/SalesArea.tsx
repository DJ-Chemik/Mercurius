import Button from "../../UI/Button/Button";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { APP_PAGE } from "../App";
import styled from "styled-components";

const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: normal;
  font-size: calc(10px + 2vmin);
  color: white;
`

const SalesArea = () => {
  return (
    <Container>
      Sales Area
      <RouteLink to={APP_PAGE.HOME}>
        <Button title="Powrót do strony głównej" />
      </RouteLink>
    </Container>
  )
}

export default SalesArea;