import React from 'react';

function InfoGeneralClima(props) {
  return (
    <>
      <div className='info-general'>
        <h4>Temperatura actual</h4>
        <p className='actual'>{props.temperatura} °C </p>
      </div>
      <div className="fecha-hora-container">
        <p className='fecha'>{props.fecha}</p>
        <p className='hora'>{props.hora} hs</p>
      </div>
    </>
  );
}

export default InfoGeneralClima;
