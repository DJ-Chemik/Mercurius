import Button from "../../UI/Button/Button"
import ReactLogo from "../../UI/ReactLogo/ReactLogo"
import RouteLink from "../../UI/RouteLink/RouteLink.styled"
import { APP_PAGE } from "../App"
import Header from "../../UI/Header/header"


const MainPage = () => {
  return (
    <Header >
      <header>
        <ReactLogo />
      </header>

      <RouteLink to={APP_PAGE.SALES}>
        <Button title="Panel sprzedaży" />
      </RouteLink>
      <Button title="Panel administracyjny" />
      <Button title="Statystyki" />
      <Button title="Pomoc" />
    </Header>
  )
}

export default MainPage
