import React from 'react';
import termometro from './Imagenes/termometro.png'

function InfoGeneralClima(props) {
  return (
    <>
      <div className='info-general'>
        <h4>Temperatura actual</h4>
        <p className='actual'>
        <img src={termometro} alt="Icono de Temperatura" className='icon-temp' />{props.temperatura} °C</p>
        <h4>Estado del clima</h4>
        <p className='estado-clima'>
        </p>
      </div>
      <div className="fecha-hora-container">
        <p className='fecha'>{props.fecha}</p>
        <p className='hora'>{props.hora} hs</p>
      </div>
    </>
  );
}

export default InfoGeneralClima;
