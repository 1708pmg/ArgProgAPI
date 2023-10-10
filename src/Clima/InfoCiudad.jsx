import React from 'react';
import datosApi from './api.json';

import { formatearFechaYHora } from './formatearFechaYHora';

const fechaApi = new Date(datosApi.current_weather.time);
const { formatoFecha, formatoHora } = formatearFechaYHora(fechaApi);

function InfoCiudad(props) {
  return (
    <>
    <h3 className='ciudad'>Clima en {props.ciudad}</h3>
    <p className='fecha-hora'>{formatoFecha} / {formatoHora}</p>
    </>
  );
}

export default InfoCiudad;