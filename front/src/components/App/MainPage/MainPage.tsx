import Button from "../../UI/Button/Button"
import ReactLogo from "../../UI/ReactLogo/ReactLogo"
import RouteLink from "../../UI/RouteLink/RouteLink.styled"
import { APP_PAGE } from "../App"

const MainPage = () => {
  return (
    <div>
      <header className="App-header">
        <ReactLogo />
        <RouteLink to={APP_PAGE.SALES}>
          <Button title="Panel sprzedaży" />
        </RouteLink>
        <Button title="Panel administracyjny" />
        <Button title="Statystyki" />
        <Button title="Pomoc" />
      </header>
    </div>
  )
}

export default MainPage
