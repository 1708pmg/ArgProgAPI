/*import React, { useState } from 'react';
import Select from 'react-select';

const LineaColectivoDropdown = ({ lineas, onSelectLinea, onSelectRecorrido, onSelectDestino, onSelectAgencia }) => {
  const [selectedRecorrido, setSelectedRecorrido] = useState('');
  const [selectedDestino, setSelectedDestino] = useState('');
  const [selectedAgencia, setSelectedAgencia] = useState('');

  const handleChange = (selectedOption) => {
    if (selectedOption) {
      onSelectLinea(selectedOption.value);
    } else {
      onSelectLinea('');
    }
  };

  const handleRecorridoChange = (selectedOption) => {
    if (selectedOption) {
      setSelectedRecorrido(selectedOption.value);
      onSelectRecorrido(selectedOption.value);
    } else {
      setSelectedRecorrido('');
      onSelectRecorrido('');
    }
  };

  const handleDestinoChange = (selectedOption) => {
    if (selectedOption) {
      setSelectedDestino(selectedOption.value);
      onSelectDestino(selectedOption.value);
    } else {
      setSelectedDestino('');
      onSelectDestino('');
    }
  };

  const handleAgenciaChange = (selectedOption) => {
    if (selectedOption) {
      setSelectedAgencia(selectedOption.value);
      onSelectAgencia(selectedOption.value);
    } else {
      setSelectedAgencia('');
      onSelectAgencia('');
    }
  };

  const options = lineas.map((linea) => ({ value: linea, label: linea }));

  return (
    <div className="linea-colectivo-dropdown">
      <label htmlFor="lineaColectivo">Seleccionar línea de colectivo: </label>
      <Select
        id="lineaColectivo"
        options={options}
        onChange={handleChange}
        isMulti={false}
        placeholder="Seleccionar"
      />

      <label htmlFor="recorrido">Seleccionar recorrido: </label>
      <Select
        id="recorrido"
        options={options}
        onChange={handleRecorridoChange}
        isMulti={false}
        value={selectedRecorrido ? { value: selectedRecorrido, label: selectedRecorrido } : null}
      />

      <label htmlFor="destino">Seleccionar destino: </label>
      <Select
        id="destino"
        options={options}
        onChange={handleDestinoChange}
        isMulti={false}
        value={selectedDestino ? { value: selectedDestino, label: selectedDestino } : null}
      />

      <label htmlFor="agencia">Seleccionar agencia: </label>
      <Select
        id="agencia"
        options={options}
        onChange={handleAgenciaChange}
        isMulti={false}
        value={selectedAgencia ? { value: selectedAgencia, label: selectedAgencia } : null}
      />
    </div>
  );
};

export default LineaColectivoDropdown;*/

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



/*import React, { useState } from 'react';

const LineaColectivoDropdown = ({ lineas, onSelectLinea, onSelectRecorrido, onSelectDestino, onSelectAgencia }) => {
  const [selectedRecorrido, setSelectedRecorrido] = useState('');
  const [selectedDestino, setSelectedDestino] = useState('');
  const [selectedAgencia, setSelectedAgencia] = useState('');

  const handleChange = (event) => {
    const selectedLinea = event.target.value;
    onSelectLinea(selectedLinea);
  };

  const handleRecorridoChange = (event) => {
    const recorrido = event.target.value;
    setSelectedRecorrido(recorrido);
    onSelectRecorrido(recorrido);
  };

  const handleDestinoChange = (event) => {
    const destino = event.target.value;
    setSelectedDestino(destino);
    onSelectDestino(destino);
  };

  const handleAgenciaChange = (event) => {
    const agencia = event.target.value;
    setSelectedAgencia(agencia);
    onSelectAgencia(agencia);
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

    
      <label htmlFor="recorrido">Recorrido: </label>
      <input type="text" id="recorrido" value={selectedRecorrido} onChange={handleRecorridoChange} />

   
      <label htmlFor="destino">Destino: </label>
      <input type="text" id="destino" value={selectedDestino} onChange={handleDestinoChange} />

     
      <label htmlFor="agencia">Agencia: </label>
      <input type="text" id="agencia" value={selectedAgencia} onChange={handleAgenciaChange} />
    </div>
  );
};

export default LineaColectivoDropdown;*/




