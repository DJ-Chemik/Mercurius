import Button from "../../UI/Button/Button"
import ReactLogo from "../../UI/ReactLogo/ReactLogo"
import RouteLink from "../../UI/RouteLink/RouteLink.styled"
import Header from "../../UI/Header/Header.js";
import { APP_PAGE } from "../App"

const MainPage = () => {
  return (
    <div>
      <Header/>
      <div className="App-header">
        <RouteLink to={APP_PAGE.SALES}>
          <Button title="Panel sprzedaży" />
        </RouteLink>
        <Button title="Panel administracyjny" />
        <Button title="Statystyki" />
        <Button title="Pomoc" />
      </div>
    </div>
  )
}

export default MainPage
