import React from 'react';
import logo from './assets/imagenes/logo.svg';
import './assets/css/App.css';
import InicioLogin from './components/InicioLogin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
 
        <section className="inicio">

        <InicioLogin/>
        </section>


      </header>
    </div>
  );
}

export default App;
