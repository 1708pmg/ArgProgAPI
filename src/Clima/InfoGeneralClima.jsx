import React from 'react';
import termometro from './Imagenes/termometro.png';
import datosApi from './api.json';
import weatherCodeInfo from './IconClima.json';
import { formatearFechaYHora } from './formatearFechaYHora';

function obtenerTemperaturaPorHora(tiempo) {
  // Buscar el índice en el array hourly.time que coincide con el tiempo proporcionado
  const indiceHora = datosApi.hourly.time.findIndex((hora) => hora === tiempo);

  // Retornar la temperatura correspondiente a ese índice
  return datosApi.hourly.temperature_2m[indiceHora];
}

function InfoGeneralClima() {
  const weatherCode = datosApi.daily.weathercode[0].toString();
  const weatherCondition = weatherCodeInfo["weatherCodeInfo"][weatherCode];
  const fechaApi = new Date(datosApi.current_weather.time);
  const { formatoFecha, formatoHora } = formatearFechaYHora(fechaApi);

  // Obtener la temperatura correspondiente a un tiempo específico (por ejemplo, "2023-10-03T21:00")
  const tiempoEspecifico = "2023-10-03T21:00";
  const temperaturaPorHora = obtenerTemperaturaPorHora(tiempoEspecifico);

  return (
    <>
      <div className='info-general'>
        <div className='column'>
          <p className='actual'>
            <img src={termometro} alt="Icono de Temperatura" className='icon-temp' />
            ${temperaturaPorHora} °C
          </p>
          <h4>Temperatura actual</h4>
        </div>
        <div className='column'>
          <p className='estado-clima'>
            {weatherCondition?.name}
            <img src={weatherCondition?.image_src} alt={weatherCondition?.name} className='icon-clima' />
            <h4>Estado del clima</h4>
          </p>
        </div>
      </div>

      <div className="fecha-hora-container">
        <div className="fecha">
          <p>{formatoFecha}</p>
        </div>
        <div className="hora">
          <p>{formatoHora}</p>
        </div>
      </div>
    </>
  );
}

export default InfoGeneralClima;

