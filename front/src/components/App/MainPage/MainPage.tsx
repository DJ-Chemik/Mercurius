import Button from "../../UI/Button/Button"
import ReactLogo from "../../UI/ReactLogo/ReactLogo"
import Title from "../../UI/Title/Title";
import RouteLink from "../../UI/RouteLink/RouteLink.styled"
import Header from "../../UI/Header/Header";
import { APP_PAGE } from "../App"
import { MainPageStyled } from "./MainPage.styled"


const MainPage = () => {
  return (
    <MainPageStyled >
      <Header />
      <RouteLink to={APP_PAGE.SALES}>
        <Button title="PANEL SPRZEDAŻY" />
      </RouteLink>
      <Button title="PANEL ADMINISTRACYJNY" />
      <Button title="STATYSTYKI" />
      <Button title="POMOC" />
    </MainPageStyled>
  )
}

export default MainPage
