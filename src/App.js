import React from 'react';
import logo from './assets/imagenes/logo.svg';
import './assets/css/App.css';
import InicioLogin from './components/InicioLogin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section className="inicio">

        <InicioLogin/>
        </section>
        <p>
          Hola a todos <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
