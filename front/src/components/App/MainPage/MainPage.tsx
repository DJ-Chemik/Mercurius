import Button from "../../UI/Button/Button"
import ReactLogo from "../../UI/ReactLogo/ReactLogo"
import RouteLink from "../../UI/RouteLink/RouteLink.styled"
import { APP_PAGE } from "../App"
import { MainPageStyled } from "./MainPage.styled"


const MainPage = () => {
  return (
    <MainPageStyled >
      <header>
        <ReactLogo />
      </header>

      <RouteLink to={APP_PAGE.SALES}>
        <Button title="Panel sprzedaży" />
      </RouteLink>
      <Button title="Panel administracyjny" />
      <Button title="Statystyki" />
      <Button title="Pomoc" />
    </MainPageStyled>
  )
}

export default MainPage
