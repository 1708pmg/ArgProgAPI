import React from 'react';

const LineaColectivoDropdown = ({ lineas, onSelectLinea }) => {
  // Ordena las líneas por el valor numérico
  const lineasOrdenadas = [...lineas].sort((a, b) => {
    // Extrae el valor numérico de la línea (eliminando la letra)
    const numeroA = parseInt(a, 10);
    const numeroB = parseInt(b, 10);

    // Compara los valores numéricos
    return numeroA - numeroB;
  });

  const handleChange = (event) => {
    const selectedLinea = event.target.value;
    onSelectLinea(selectedLinea);
  };

  return (
    <div className="linea-colectivo-dropdown">
      <label htmlFor="lineaColectivo">Seleccionar línea de colectivo: </label>
      <select id="lineaColectivo" onChange={handleChange}>
        <option value="">Seleccionar</option>
        {lineasOrdenadas.map((linea) => (
          <option key={linea} value={linea}>
            {linea}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LineaColectivoDropdown;





/*import React from 'react';

const LineaColectivoDropdown = ({ lineas, onSelectLinea }) => {
  // Ordena las líneas de menor a mayor
  const lineasOrdenadas = [...lineas].sort((a, b) => a.localeCompare(b));

  const handleChange = (event) => {
    const selectedLinea = event.target.value;
    onSelectLinea(selectedLinea);
  };

  return (
    <div className="linea-colectivo-dropdown">
      <label htmlFor="lineaColectivo">Seleccionar línea de colectivo: </label>
      <select id="lineaColectivo" onChange={handleChange}>
        <option value="">Seleccionar</option>
        {lineasOrdenadas.map((linea) => (
          <option key={linea} value={linea}>
            {linea}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LineaColectivoDropdown;*/




/*import React from 'react';

const LineaColectivoDropdown = ({ lineas, onSelectLinea }) => {
  const handleChange = (event) => {
    const selectedLinea = event.target.value;
    onSelectLinea(selectedLinea);
  };

  return (
    <div className="linea-colectivo-dropdown">
      <label htmlFor="lineaColectivo">Seleccionar línea de colectivo: </label>
      <select id="lineaColectivo" onChange={handleChange}>
        <option value="">Seleccionar</option>
        {lineas.map((linea) => (
          <option key={linea} value={linea}>
            {linea}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LineaColectivoDropdown;*/



/*import React from 'react';

const LineaColectivoDropdown = ({ lineas, onSelectLinea }) => {
  const handleChange = (event) => {
    const selectedLinea = event.target.value;
    onSelectLinea(selectedLinea);
  };

  return (
    <div className="linea-colectivo-dropdown">
      <label htmlFor="lineaColectivo">Seleccionar línea de colectivo: </label>
      <select id="lineaColectivo" onChange={handleChange}>
        <option value="">Seleccionar</option>
        {lineas.map((linea) => (
          <option key={linea.route_id} value={linea.route_short_name}>
            {linea.route_short_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LineaColectivoDropdown;*/
