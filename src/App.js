import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Logo />  
    holii
    <BestPokemon />
    </div>
  );
}

function Logo() {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  ) 
}

function BestPokemon() {
  return (
      <p>My favorite Pokémon is Squirtle</p>
  )
  
}

export default App;
