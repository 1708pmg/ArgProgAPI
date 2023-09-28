import React from 'react';
import './App.css';
import Clima from './Clima/Clima';
import Transporte from './Transporte/Transporte';

function App() {
  // Datos para el clima
  const datosClima = {
  };

  
  const datosTransporte = {
  };

  return (
    <div className="App">
      <div className="clima-container">
        <Clima {...datosClima} />
      </div>
      <div className="transporte-container">
        <Transporte {...datosTransporte} />
      </div>
    </div>
  );
}

export default App;

