import React from 'react';
import logo from './assets/imagenes/logo.svg';
import './assets/css/App.css';
import InicioLogin from './components/InicioLogin/InicioLogin';
import MenuCarta from './components/MenuCarta/MenuCarta';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
 
        <section className="inicio">

        <InicioLogin/>
        <MenuCarta/>
        
        
        </section>

      
        

      </header>
      <section className="MenuCarta">
        <MenuCarta/>
        </section>
    </div>
  );
}

export default App;
