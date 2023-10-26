import React from 'react';

// Componente funcional NumeroLineaColectivo
const NumeroLineaColectivo = ({ route_short_name }) => {
    return (
        // Contenedor div con la clase "numero-linea-colectivo"
        <div className="numero-linea-colectivo">
            <p>Línea: {route_short_name}</p>
        </div>
    );
};
// Exporta el componente para su uso en otros lugares
export default NumeroLineaColectivo;
