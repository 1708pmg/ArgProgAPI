import React from 'react';
import datosApi from './api.json';
import { formatearFechaYHora } from './formatearFechaYHora';
import styled from 'styled-components';
import '../App.css';

const TemperaturaPorHoraWrapper = styled.div`
`;

function TemperaturaPorHora(props) {
  const datosPorHora = datosApi.hourly.time
    .filter((hora, index) => index % 3 === 0)
    .map((hora, index) => ({
      hora,
      temperatura: datosApi.hourly.temperature_2m[index],
    }));

  const temperaturaMaxima = Math.max(...datosPorHora.map((hora) => hora.temperatura));

  return (
    <TemperaturaPorHoraWrapper>
      <h5>Temperatura por Hora</h5>
      <div className="temperatura-por-hora">
        <div className="lista-temperaturas">
          {datosPorHora.map((hora, index) => (
            <div
              key={index}
              className="temperatura-hora"
              style={{ height: `${(hora.temperatura / temperaturaMaxima) * 100}px` }}
            >
              <span>{hora.temperatura}°C</span>
              <span>{formatearFechaYHora(new Date(hora.hora)).formatoHora}</span>

            </div>
          ))}
        </div>
      </div>
    </TemperaturaPorHoraWrapper>
  );
}

export default TemperaturaPorHora;




/*import React from 'react';
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
