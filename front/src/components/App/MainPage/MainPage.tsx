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
        <RouteLink to={APP_PAGE.MAINTENANCE}>
          <Button title="Panel administracyjny" />
        </RouteLink>
        <RouteLink to={APP_PAGE.STATISTICS}>
          <Button title="Statystyki" />
        </RouteLink>
        <RouteLink to={APP_PAGE.HELP}>
          <Button title="Pomoc" />
        </RouteLink>

      </header>
    </div>
  )
}

export default MainPage
