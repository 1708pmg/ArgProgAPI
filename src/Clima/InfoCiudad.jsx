import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { formatearFechaYHora } from './formatearFechaYHora';
import ciudadData from './ciudad.json';

const ClimaInfo = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
  margin-bottom: 16px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
`;

const DropdownList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 5px 5px;
  background-color: #fff;
  z-index: 1;
`;

const DropdownItem = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

function InfoCiudad({ weatherData, selectedCity, setSelectedCity }) {
  const [filteredCities, setFilteredCities] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleCityChange = (event) => {
    const input = event.target.value;
    setInputValue(input)
    //iltra ciudades que coinciden con la entrada del usuario
    const filteredCities = ciudadData
      .filter((entry) => entry.name.toLowerCase().startsWith(input.toLowerCase()))
      .map((entry) => ({
        name: entry.name,
        country: entry.country,
      }));

    setFilteredCities(filteredCities);
  };

  const handleCitySelection = (city) => {
    const selectedCityText = `${city.name}, ${city.country}`;
    setSelectedCity(selectedCityText);
  };

  if (!weatherData || !weatherData.hourly || !weatherData.hourly.time) {
    return <p>Datos meteorológicos no válidos</p>;
  }

  const fechaApi = new Date(weatherData.current.time);
  const { formatoFecha, formatoHora } = formatearFechaYHora(fechaApi);

  return (
    <>
      <ClimaInfo className="ciudad">
        <h3>Clima en {selectedCity || '...'}</h3>
        <p>{`${formatoFecha}, ${formatoHora}`}</p>
      </ClimaInfo>

      <DropdownContainer>
        <StyledLabel>Seleccione una ciudad:</StyledLabel>
        <StyledInput
          value={inputValue}
          onChange={handleCityChange}
          placeholder="Escriba para buscar..."
        />
        {filteredCities.length > 0 && (
          <DropdownList>
            {filteredCities.map((city, index) => (
              <DropdownItem key={index} onClick={() => handleCitySelection(city)}>
                {`${city.name}, ${city.country}`}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    </>
  );
}

export default InfoCiudad;

