import React from 'react';
import { formatearFechaYHora } from './formatearFechaYHora';

function InfoCiudad({ weatherData }) {
  if (!weatherData || !weatherData.hourly || !weatherData.hourly.time) {
    return <p>Datos meteorológicos no válidos</p>;
  }

  // Formatear la fecha y la hora utilizando la función importada
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



/*import React from 'react';
import { formatearFechaYHora } from './formatearFechaYHora';

function InfoCiudad({ fecha }) {
  if (!fecha) {
    return <div>Datos no disponibles</div>;
  }

  const { time} = fecha;
  const { formatoFecha, formatoHora } = formatearFechaYHora(time);

  return (
    <>
      <h3 className='ciudad'>Clima en Buenos Aires</h3>
      <p className='fecha-hora'>{formatoFecha} / {formatoHora}</p>
    </>
  );
}

export default InfoCiudad;*/





/*import React from 'react';
import { formatearFechaYHora } from './formatearFechaYHora';

function InfoCiudad({ datosApi }) {
  if (!datosApi) {
    return <div>Datos no disponibles</div>;}
    const { time, otraPropiedad } = datosApi;

  return (
    <>
      <h3 className='ciudad'>Clima en {weatherData.latitude}</h3>
      <p className='fecha-hora'>{formatoFecha} / {formatoHora}</p>
      {weatherData.latitude && <p>Latitud: {weatherData.latitude}</p>}
    </>
  );
}

export default InfoCiudad;*/




/*import React from 'react';
import { formatearFechaYHora } from './formatearFechaYHora';

function InfoCiudad(props) {
  const fechaApi = new Date(props.weatherData.current.time);
  const { formatoFecha, formatoHora } = formatearFechaYHora(fechaApi);

  return (
    <>
    <h3 className='ciudad'>Clima en {props.weatherData.nombreCiudad}</h3>
    <p className='fecha-hora'>{formatoFecha} / {formatoHora}</p>
    {props.weatherData.latitud && <p>Latitud: {props.weatherData.latitud}</p>}
  </>
  );
}

export default InfoCiudad;*/