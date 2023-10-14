import React from 'react';
import termometro from './Imagenes/termometro.png';
import weatherCodeInfo from './IconClima.json';

function InfoGeneralClima({ weatherData }) {
  if (!weatherData || !weatherData.hourly || !weatherData.hourly.temperature_2m || weatherData.hourly.temperature_2m.length === 0) {
    return <p>Datos meteorológicos no válidos</p>;
  }

  const temperatura = weatherData.hourly.temperature_2m[0];
  const weatherCode = weatherData.daily.weathercode[0]?.toString();
  const weatherCondition = weatherCodeInfo["weatherCodeInfo"][weatherCode];

  return (
    <>
      <div className='info-general'>
        <div>
          <h5 className="temperatura">Temperatura actual</h5>
          <p className='temp-actual'>
            <img src={termometro} alt="Icono de Temperatura" className='icon-temp' />
            {temperatura} °C
          </p>
        </div>

        <div>
          <h5 className='estado'>Estado del clima</h5>
          <p className='estado-clima'>
            {weatherCondition?.name}
            <img src={weatherCondition?.image_src} alt={weatherCondition?.name} className='icon-clima' />
          </p>
        </div>
      </div>
    </>
  );
}

export default InfoGeneralClima;




/*import React from 'react';
import termometro from './Imagenes/termometro.png';
import weatherCodeInfo from './IconClima.json';
/*import { formatearFechaYHora } from './formatearFechaYHora';


function obtenerTemperaturaPorHora({weatherData},tiempo) {
  
  const indiceHora = weatherData.hourly.time.findIndex((hora) => hora === tiempo);

  return weatherData.hourly.temperature_2m[indiceHora];
}
function InfoGeneralClima({weathercode, temperatura, fecha, hora }) {
  if (!temperatura || !fecha || !hora) {
    return <div>Datos no disponibles</div>;
  }

  const weatherCondition = weatherCodeInfo["weatherCodeInfo"][weathercode.toString()];
  /*const fechaApi = new Date(weatherData.current.time);
  const { formatoFecha, formatoHora } = formatearFechaYHora(weatherData);

  return (
    <>
      <div className='info-general'>
        <div>
          <h5 className="temperatura">Temperatura actual</h5>
          <p className='temp-actual'>
            <img src={termometro} alt="Icono de Temperatura" className='icon-temp' />
            {obtenerTemperaturaPorHora} °C
          </p>
        </div>

        <div>
          <h5 className='estado'>Estado del clima</h5>
          <p className='estado-clima'>
            {weatherCondition?.name}
            <img src={weatherCondition?.image_src} alt={weatherCondition?.name} className='icon-clima' />
          </p>
        </div>
      </div>
    </>
  );
}

export default InfoGeneralClima;*/





/*import React from 'react';
import termometro from './Imagenes/termometro.png';
import weatherCodeInfo from './IconClima.json';
import {formatearFechaYHora}  from './formatearFechaYHora';

function obtenerTemperaturaPorHora(weatherData,tiempo) {
  // Buscar el índice en el array hourly.time que coincide con el tiempo proporcionado
  const indiceHora = weatherData.hourly.time.findIndex((hora) => hora === tiempo);

  // Retornar la temperatura correspondiente a ese índice
  return weatherData.hourly.temperature_2m[indiceHora];
}

function InfoGeneralClima(weatherData,) {
  const weatherCode = weatherData.daily.weathercode[0].toString();
  const weatherCondition = weatherCodeInfo["weatherCodeInfo"][weatherCode];
  const fechaApi = new Date(weatherData.current.time);
  const { formatoFecha, formatoHora } = formatearFechaYHora(weatherData);

  // Obtener la temperatura correspondiente a un tiempo específico (por ejemplo, "2023-10-03T21:00")
  /*const tiempoEspecifico = "2023-10-03T21:00";
  const temperaturaPorHora = obtenerTemperaturaPorHora(tiempoEspecifico);*/

 /* return (
    <>
      <div className='info-general'>
        <div >
          <h5 className="temperatura">Temperatura actual</h5>
          <p className='temp-actual'>
            <img src={termometro} alt="Icono de Temperatura" className='icon-temp' />
            {obtenerTemperaturaPorHora} °C
          </p>
        </div>

        <div >
          <h5 className='estado'>Estado del clima</h5>
          <p className='estado-clima'>
            {weatherCondition?.name}
            <img src={weatherCondition?.image_src} alt={weatherCondition?.name} className='icon-clima' />
          </p>
        </div>
      </div>
    </>
  );
}

export default InfoGeneralClima;*/

