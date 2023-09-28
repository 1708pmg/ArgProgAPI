import React from 'react';

function SalidaPuestaSol(props) {
  return (
    <div className="salida-puesta">
      <p className='sol'>Salida del sol: {props.salida}hs</p>
      <p className='sol'>Puesta del sol: {props.puesta}hs</p>
    </div>
  );
}

export default SalidaPuestaSol;
