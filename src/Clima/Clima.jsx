import React from 'react';
import InfoCiudad from './InfoCiudad';
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol';
import TemperaturaMinMax from './TemperaturaMinMax';
import TemperaturaPorHora from './TemperaturaPorHora';

function Clima ({weatherData}) {
if (!weatherData) {
  return <p>Datos meteorológicos no válidos</p>;
}

/*const datosPorHora = weatherData.hourly && weatherData.hourly.time
  ? weatherData.hourly.time.map((hora, index) => ({
    hora,
    temperatura: weatherData.hourly.temperature_2m[index],
  }))
  : [];*/

return (
  <div className="clima-container">
    <InfoCiudad weatherData={weatherData} />
    <InfoGeneralClima weatherData={weatherData}/>
    <InfoDetalladaClima weatherData={weatherData} />
    <SalidaPuestaSol weatherData={weatherData} />
    <TemperaturaMinMax weatherData={weatherData} />
    <TemperaturaPorHora weatherData={weatherData} />
  </div>
);
}

export default Clima;
