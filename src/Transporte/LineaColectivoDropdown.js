import React from 'react';

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

export default LineaColectivoDropdown;



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
