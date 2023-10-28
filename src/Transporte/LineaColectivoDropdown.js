import React from 'react';

const LineaColectivoDropdown = ({ lineas, onSelectLinea, lineasFiltradas }) => {
  // Filtra las líneas según el array lineasFiltradas y las ordena por el número
  const lineasMostradas = [...lineas]
    // Filtra las líneas según el array lineasFiltradas
    .filter((linea) => lineasFiltradas.includes(linea))
    .sort((a, b) => {
      // Extrae el número de la línea
      // Convierte a número eliminando caracteres no numéricos
      const numeroA = parseInt(a.replace(/\D/g, ''), 10);
      const numeroB = parseInt(b.replace(/\D/g, ''), 10);

      // Compara los números para ordenar de menor a mayor
      return numeroA - numeroB;
    });

  // Función que se ejecuta cuando se selecciona una línea
  const handleChange = (event) => {
    const selectedLinea = event.target.value;
    onSelectLinea(selectedLinea);
  };

  // Componente de desplegable de líneas de colectivo
  return (
    <div className="linea-colectivo-dropdown">
      <label htmlFor="lineaColectivo">Seleccionar línea de colectivo: </label>
      <select id="lineaColectivo" onChange={handleChange}>
        <option value="">Seleccionar</option>
        {lineasMostradas.map((linea) => (
          <option key={linea} value={linea}>
            {linea}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LineaColectivoDropdown;
