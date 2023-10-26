// NumeroLineaIcono.jsx

import React from 'react';

const NumeroLineaIcono = ({ numero }) => {
  // Ajusta la ruta de la carpeta que contiene los iconos de los números de colectivo
  const rutaIconos = 'src/imagenes';

  // Obtén la URL del icono correspondiente al número de la línea
  const obtenerURLIcono = (numero) => {
    // Ajusta según la convención de nombres de tus archivos de iconos
    return `${rutaIconos}${numero}.png`;
  };

  return (
    <img
      src={obtenerURLIcono(numero)}
      alt={`Número de línea ${numero}`}
      style={{ width: '25px', height: '25px' }} // Ajusta el tamaño según tus necesidades
    />
  );
};

export default NumeroLineaIcono;
