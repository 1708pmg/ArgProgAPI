import React from 'react';
import amanecer from './Imagenes/amanecer.png';
import atardecer from './Imagenes/atardecer.png';
import { formatearFechaYHora } from './formatearFechaYHora';

function SalidaPuestaSol({ weatherData }) {
  const { formatoHora: salidaSolFormatoHora } = formatearFechaYHora(new Date(weatherData.daily.sunrise));
  const { formatoHora: puestaSolFormatoHora } = formatearFechaYHora(new Date(weatherData.daily.sunset));

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




