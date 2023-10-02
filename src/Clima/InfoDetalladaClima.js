
import React from 'react';

function InfoDetalladaClima(props) {
  return (
    <div className="info-detallada">
      <p className='humedad'>Humedad: {props.humedad} %</p>
      <p className='visibilidad'>Visibilidad: {props.visibilidad} Km</p>
      <p className='viento'>Viento: {props.viento}  Km/hora <img src="./imagenes/viento.svg" alt="Ícono de viento"/></p>
      <p className='aire'>Calidad del aire: {props.aire} </p>
    </div>
  );
}

export default InfoDetalladaClima;