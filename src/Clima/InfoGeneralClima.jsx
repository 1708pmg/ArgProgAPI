import React from 'react';
import termometro from './Imagenes/termometro.png';
import weatherCodeInfo from './IconClima.json';

function InfoGeneralClima({ weatherData }) {
  //Manejar casos en los que los datos meteorológicos no están disponibles o no son válidos.//
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
