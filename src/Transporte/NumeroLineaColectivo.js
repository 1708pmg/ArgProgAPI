import React from 'react';




const NumeroLineaColectivo = ({route_short_name}) => {
  return (
    <div className="numero-linea-colectivo">
      <p>Línea: {route_short_name}</p>
    </div>
  );
};

export default NumeroLineaColectivo;
