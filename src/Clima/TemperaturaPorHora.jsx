import React from 'react';
import datosApi from './api.json';
import { formatearFechaYHora } from './formatearFechaYHora';

function TemperaturaPorHora() {
  const datosPorHora = datosApi.hourly.time.map((hora, index) => ({
    hora, temperatura: datosApi.hourly.temperature_2m[index],
  }));

  return (
    <div className="temperatura-por-hora">
      <h4>Temperatura por Hora</h4>
      <div className="lista-temperaturas">
        {datosPorHora.map((hora, index) => (
          <div key={index} className="temperatura-hora">
            {formatearFechaYHora(new Date(hora.hora)).formatoHora} {hora.temperatura}°C
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemperaturaPorHora;






/*import React from 'react';
import datosApi from './api.json'

function TemperaturaPorHora({ datosPorHora }) {
  
  return (
    <div className="temperatura-por-hora">
      <h4>Temperatura por Hora</h4>
      <div className="lista-temperaturas">
        {datosPorHora.map((hora, index) => (
          <div key={index} className="temperatura-hora">
            {hora.hora}: {hora.temperatura}°C
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemperaturaPorHora;*/
