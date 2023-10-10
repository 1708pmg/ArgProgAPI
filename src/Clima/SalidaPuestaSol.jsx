import React from 'react';
import amanecer from './Imagenes/amanecer.png';
import atardecer from './Imagenes/atardecer.png';
import datosApi from './api.json';
import { formatearFechaYHora } from './formatearFechaYHora';

function SalidaPuestaSol(props) {
  const { formatoHora: salidaSolFormatoHora } = formatearFechaYHora(new Date(datosApi.daily.sunrise));
  const { formatoHora: puestaSolFormatoHora } = formatearFechaYHora(new Date(datosApi.daily.sunset));

  return (
    <div className="salida-puesta">
      <div className='sol-info'>
        <p className='salida-sol'>
          <img src={amanecer} alt="Amanecer Icon" className="icon-amanecer" />
          Salida del sol: {salidaSolFormatoHora} .
        </p>
      </div>

      <div className='sol-info'>
        <p className='puesta-sol'>
          <img src={atardecer} alt="Atardecer Icon" className="icon-atardecer" />
          Puesta del sol: {puestaSolFormatoHora} .
        </p>
      </div>
    </div>
  );
}

export default SalidaPuestaSol;





/*import React from 'react';
import amanecer from './Imagenes/amanecer.png'
import atardecer from './Imagenes/atardecer.png'
import datosApi from './api.json'
import { formatearFechaYHora } from './formatearFechaYHora';



function SalidaPuestaSol(props) {
  return (
    <div className="salida-puesta">

      <div className='sol-info'>
        <p className='salida-sol'>
          <img src={amanecer} alt="Amanecer Icon" className="icon" />
          Salida del sol: {datosApi.daily.sunrise} hs.</p>
      </div>

      <div className='sol-info'>
        <p className='puesta-sol'>
          <img src={atardecer} alt="Atardecer Icon" className="icon" />
          Puesta del sol: {datosApi.daily.sunset} hs. </p>
      </div>
    </div>
  );
}

export default SalidaPuestaSol;*/
