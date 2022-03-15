import ReactLogo from '../UI/ReactLogo/ReactLogo';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import SalesArea from './SalesArea/SalesArea';
import HelpArea from './HelpArea/HelpArea';
import ProductArea from './ProductArea/ProductArea';

export enum APP_PAGE {
  HOME = '/',
  HELP = '/help',
  MAINTENANCE = '/maintenance',
  STATISTICS = '/statistics',
  SALES = '/sales',
  PRODUCT = '/product',
}

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path={APP_PAGE.HOME} component={MainPage} />
        <Route path={APP_PAGE.SALES} component={SalesArea} />
        <Route path={APP_PAGE.HELP} component={HelpArea} />
        <Route path={APP_PAGE.PRODUCT} component={ProductArea} />
      </div>
    </Router>
  );
}

export default App;
