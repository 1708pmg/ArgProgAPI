import React from 'react';
import { formatearFechaYHora } from './formatearFechaYHora';

function InfoCiudad({ weatherData }) {
  if (!weatherData || !weatherData.hourly || !weatherData.hourly.time) {
    return <p>Datos meteorológicos no válidos</p>;
  }

  // Formatear la fecha y la hora utilizando la función importada//
  const fechaApi = new Date(weatherData.current.time);
  const { formatoFecha, formatoHora } = formatearFechaYHora(fechaApi);

  return (
    <>
      <h3 className='ciudad'>Clima en Buenos Aires</h3>
      <p className='fecha-hora'>{`${formatoFecha}, ${formatoHora}`}</p>
    </>
  );
}

export default InfoCiudad;