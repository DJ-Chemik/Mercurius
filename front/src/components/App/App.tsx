import Button from '../UI/Button/Button';
import ReactLogo from '../UI/ReactLogo/ReactLogo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactLogo />
        <Button title="Panel produktów"/>
        <Button title="Panel administracyjny"/>
        <Button title="Ustawienia"/>
        <Button title="Pomoc"/>
      </header>
    </div>
  );
}

export default App;
