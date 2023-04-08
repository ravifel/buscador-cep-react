import './App.css';
import Card from './components/Card'
import Cep from './components/Cep';
import NavBar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />

        {/* //Trabalhando com Rotas no React */}
        <Routes>
          <Route exact path='/cep' Component={Cep} />
          <Route exact path='/card' Component={Card} />
        </Routes>

      </header>
    </div>

  );
}

export default App;
