import React from 'react';
import vientoIcon from './Imagenes/viento.svg';
import humedadIcon from './Imagenes/humedad.svg';
import visibilidadIcon from './Imagenes/visibilidad.svg';
import calidadAireIcon from './Imagenes/calidadAire.png';
import datosApi from './api.json';

function obtenerCalAire(ica) {
  if (ica >= 0 && ica <= 50) {
    return 'Buena';
  } else if (ica >= 51 && ica <= 100) {
    return 'Moderada';
  } else if (ica >= 101 && ica <= 150) {
    return 'Dañina a la salud para grupos sensibles';
  } else if (ica >= 151 && ica <= 200) {
    return 'Dañina a la salud';
  } else if (ica >= 201 && ica <= 300) {
    return 'Muy dañina a la salud';
  } else {
    return 'Peligrosa';
  }
}

function obtenerDatosHoraActual() {
  const fechaActual = new Date();
  const horaActual = fechaActual.getHours();

  // Buscar el índice correspondiente a la hora actual
  const indiceHoraActual = datosApi.hourly.time.findIndex(
    (hora) => new Date(hora).getHours() === horaActual
  );

  // Retornar los datos correspondientes a la hora actual
  return {
    ica: datosApi.hourly.european_aqi[indiceHoraActual],
    humedad: datosApi.hourly.relativehumidity_2m[indiceHoraActual],
    visibilidad: datosApi.hourly.visibility[indiceHoraActual],
    viento: datosApi.daily.windspeed_10m_max,
  };
}

function InfoDetalladaClima() {
  const { ica, humedad, visibilidad, viento } = obtenerDatosHoraActual();
  const calAire = obtenerCalAire(ica);

  return (
    <div className={`info-detallada ${calAire}`}>
      <p className='humedad'>
        <img src={humedadIcon} alt='Icono de humedad' className='icon' />
        Humedad: {humedad} %
      </p>
      <p className='visibilidad'>
        <img src={visibilidadIcon} alt='Icono de visibilidad' className='icon' />
        Visibilidad: {visibilidad} metros
      </p>
      <p className='viento'>
        <img src={vientoIcon} alt='Ícono de viento' className='icon' />
        Viento: {viento} Km/hora
      </p>
      <p className='aire'>
        <img src={calidadAireIcon} alt='Ícono de calidad aire' className='icon'></img>
        Calidad del aire: {calAire}
      </p>
    </div>
  );
}

export default InfoDetalladaClima;