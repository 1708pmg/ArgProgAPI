import React from 'react';

function InfoGeneralClima(props) {
  return (
    <div className='info-general'>
      <p className='actual'>Temperatura actual: {props.temperatura} °C</p>
      <p className='fecha'>Fecha: {props.fecha} </p>
      <p className='hora'>Hora: {props.hora} hs</p>
    </div>
  );
}

export default InfoGeneralClima;
