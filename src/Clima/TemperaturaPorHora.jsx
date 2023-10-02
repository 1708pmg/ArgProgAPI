import React from 'react';


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

export default TemperaturaPorHora;
