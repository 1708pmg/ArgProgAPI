import React from 'react';
import vientoIcon from './Imagenes/viento.svg';
import humedadIcon from './Imagenes/humedad.svg';
import visibilidadIcon from './Imagenes/visibilidad.svg';
import calidadAireIcon from './Imagenes/calidadAire.png';

function obtenerDatosHoraActual(weatherData) {
  const fechaActual = new Date();
  const horaActual = fechaActual.getHours();

  // Buscar el índice correspondiente a la hora actual
  const indiceHoraActual = weatherData.hourly.time.findIndex(
    (hora) => new Date(hora).getHours() === horaActual
  );

  // Retornar los datos correspondientes a la hora actual
  return {
    humedad: weatherData.hourly.relativehumidity_2m[indiceHoraActual],
    visibilidad: weatherData.hourly.visibility[indiceHoraActual],
  };
}

function InfoDetalladaClima({ weatherData }) {
  // Obtener datos utilizando la función obtenerDatosHoraActual
  const { humedad, visibilidad } = obtenerDatosHoraActual(weatherData );
  const viento = weatherData.daily.windspeed_10m_max[0]
  console.log(weatherData)

  return (
    <div >
      <div className={`humedad`}>
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
          Viento: {viento}  Km/hora
        </p>
        <p className='aire'>
          <img src={calidadAireIcon} alt='Ícono de calidad aire' className='icon'></img>
          Calidad del aire: Buena
        </p>
      </div>
    </div>
  );
}

export default InfoDetalladaClima;





/*import React from 'react';
import vientoIcon from './Imagenes/viento.svg';
import humedadIcon from './Imagenes/humedad.svg';
import visibilidadIcon from './Imagenes/visibilidad.svg';
import calidadAireIcon from './Imagenes/calidadAire.png';


/*function obtenerCalAire(ica) {
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

function obtenerDatosHoraActual({weatherData}) {
  const fechaActual = new Date();
  const horaActual = fechaActual.getHours();

  // Buscar el índice correspondiente a la hora actual
  const indiceHoraActual = weatherData.hourly.time.findIndex(
    (hora) => new Date(hora).getHours() === horaActual
  );

  // Retornar los datos correspondientes a la hora actual
  return {
    /*ica: weatherData.hourly.european_aqi[indiceHoraActual],
    humedad: weatherData.hourly.relativehumidity_2m[indiceHoraActual],
    visibilidad: weatherData.hourly.visibility[indiceHoraActual],
    viento: weatherData.daily.windspeed_10m_max,
  };
}

function InfoDetalladaClima() {
  const {humedad, visibilidad, viento } = obtenerDatosHoraActual();
  /*const calAire = obtenerCalAire(ica);

  return (
    <div>
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
        Calidad del aire: "Buena"
      </p>
    </div>
  );
}

export default InfoDetalladaClima;*/