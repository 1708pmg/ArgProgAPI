import React from 'react';
import { formatearFechaYHora } from './formatearFechaYHora';
import styled from 'styled-components';
import '../App.css';

// Se define un componente envuelto en un styled-component.
const TemperaturaPorHoraWrapper = styled.div``;

// Componente funcional para mostrar la temperatura por hora.
function TemperaturaPorHora({ weatherData }) {

  // Verifica si los datos meteorológicos necesarios están disponibles.
  if (!weatherData || !weatherData.hourly || !weatherData.hourly.time || !weatherData.hourly.temperature_2m) {
    return <p>Datos meteorológicos no válidos</p>;
  }

  // Filtra y mapea los datos por hora, seleccionando cada tercera hora.
  const datosPorHora = weatherData.hourly.time
    .filter((hora, index) => index % 3 === 0)
    .map((hora, index) => ({
      hora,
      temperatura: weatherData.hourly.temperature_2m[index],
    }));

  // Calcula la temperatura máxima entre las horas seleccionadas.
  const temperaturaMaxima = Math.max(...datosPorHora.map((hora) => hora.temperatura));

  // Renderiza el componente con la información de temperatura por hora.
  return (
    <TemperaturaPorHoraWrapper>
      <h5>Temperatura por Hora</h5>
      <div className="temperatura-por-hora">
        <div className="lista-temperaturas">
          {datosPorHora.map((hora, index) => (
            <div
              key={index}
              className="temperatura-hora"
              // Establece la altura del componente proporcional a la temperatura máxima.
              style={{ height: `${(hora.temperatura / temperaturaMaxima) * 100}px` }}
            >
              {/* Muestra la temperatura y la hora formateada. */}
              <span>{hora.temperatura}°C</span>
              <span>{formatearFechaYHora(new Date(hora.hora)).formatoHora}</span>
            </div>
          ))}
        </div>
      </div>
    </TemperaturaPorHoraWrapper>
  );
}
// Exporta el componente para su uso en otros lugares
export default TemperaturaPorHora;  
