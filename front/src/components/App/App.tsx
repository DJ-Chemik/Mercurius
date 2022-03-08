import ReactLogo from '../UI/ReactLogo/ReactLogo';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import MainPage from './MainPageArea/MainPage';
import SalesArea from './SalesArea/SalesArea';
import MaintenancePage  from "./MaintenanceArea/MaintenancePage";
import StatisticsPage from "./StatisticsArea/StatisticsPage";
import HelpPage from "./HelpArea/HelpPage";
export enum APP_PAGE {
  HOME = '/',
  HELP = '/help',
  MAINTENANCE = '/maintenance',
  STATISTICS = '/statistics',
  SALES = '/sales',
}

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path={APP_PAGE.HOME} component={MainPage} />
        <Route path={APP_PAGE.SALES} component={SalesArea} />
        <Route path={APP_PAGE.MAINTENANCE} component={MaintenancePage} />
        <Route path={APP_PAGE.STATISTICS} component={StatisticsPage} />
        <Route path={APP_PAGE.HELP} component={HelpPage} />
      </div>
    </Router>
  );
}

export default App;
