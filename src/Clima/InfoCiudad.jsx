import React from 'react';

function InfoCiudad (props) {
  return (
    <div className='info-ciudad'>
      <h2>Clima en {props.ciudad}</h2>
    </div>
  );
}

export default InfoCiudad;