import React from 'react';
import './App.css';
import Clima from './Clima/Clima';
import Transporte from './Transporte/Transporte';

function App() {
  const datosClima = {
    ciudad: 'Buenos Aires',
    temperatura: 25,
    fecha: "15 agosto",
    hora: 17,
    humedad: 60,
    visibilidad: 10,
    viento: 10,
    aire: "buena",
    salida: 7.01,
    puesta: 19.05,
    minima: 5,
    maxima: 10,
    porhora: 10,
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
