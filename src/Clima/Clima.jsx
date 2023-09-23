import React from 'react';

function Clima(props) {
  return (
    <div className="clima-container">
      <h2>Clima en {props.ciudad}</h2>

        <div id='datos'>
        <p className='actual'>Temperatura actual: {props.temperatura}°C</p>
        <p className='fecha'>Fecha: {props.fecha} </p>
        <p className='hora'>Hora: {props.hora} hs</p>
        </div>

        <div id="items">
        <p className='humedad'>Humedad: {props.humedad}%</p>
        <p className='visibilidad'>Visibilidad: {props.visibilidad} Km</p>
        <p className='viento'>Viento: {props.viento} km por hora</p>
        <p className='aire'>Calidad del aire: {props.aire}</p>

          <div id= "sol">
          <p>Salida del sol: {props.salida}hs</p>
          <p>Puesta del sol: {props.puesta}hs</p>
          </div>

          <div id="temp">
          <p>Temperatura Minima: {props.minina} °</p> 
          <p>Temperatura Maxima: {props.maxima} °</p>
          </div>
        
        </div>

        <div id= "porHora">
        <p>Temperatura por hora: {props.porhora} °</p>
        </div>
      
    </div>
  );
}

export default Clima;
