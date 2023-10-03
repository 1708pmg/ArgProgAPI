/*import React from 'react';

function SalidaPuestaSol(props) {
  return (
    <div className="salida-puesta">
      <p className='sol'>Salida del sol: {props.salida}hs</p>
      <p className='sol'>Puesta del sol: {props.puesta}hs</p>
    </div>
  );
}

export default SalidaPuestaSol;*/
import React from 'react';
import amanecer from './Imagenes/amanecer.png'
import atardecer from './Imagenes/atardecer.png'


function SalidaPuestaSol(props) {
  return (
    <div className="salida-puesta">

      <div className='sol-info'>
        <p className='salida-sol'>
          <img src={amanecer} alt="Amanecer Icon" className="icon" />
          Salida del sol: {props.salida}hs.</p>
      </div>

      <div className='sol-info'>
        <p className='puesta-sol'>
          <img src={atardecer} alt="Atardecer Icon" className="icon" />
          Puesta del sol: {props.puesta}hs. </p>
      </div>
    </div>
  );
}

export default SalidaPuestaSol;
