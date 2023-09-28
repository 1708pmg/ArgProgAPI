import React from 'react';

function TemperaturaPorHora(props) {
  const { datosPorHora } = props; 

  return (
    <div className="temperatura-por-hora">
      <h3>Temperatura por Hora</h3>
      <ul className="lista-temperaturas">
        {datosPorHora.map((hora, index) => (
          <li key={index} className="temperatura-hora">
            {hora.hora}: {hora.temperatura}°C
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TemperaturaPorHora;
