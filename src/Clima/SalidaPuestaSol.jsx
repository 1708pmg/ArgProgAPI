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

function SalidaPuestaSol(props) {
  return (
    <div className="salida-puesta">
      <div className='sol-info'>
        <p className='sol'>Salida del sol: {props.salida}hs. <img src="./imagenes/amanecer.png" alt="Amanecer Icon" className="icon" /></p>

      </div>
      <div className='sol-info'>
        <p className='sol'>Puesta del sol: {props.puesta}hs. <img src="./imagenes/atardecer.png" alt="Atardecer Icon" className="icon" /></p>

      </div>
    </div>
  );
}

export default SalidaPuestaSol;
