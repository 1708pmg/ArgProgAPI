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

function InfoCiudad({ weatherData, onLocationChange }) {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    const countryList = Array.from(new Set(ciudadData.map((entry) => entry.country)));
    setCountries(countryList);
  }, []);

  useEffect(() => {
    // Actualiza la lista de ciudades cuando se selecciona un país
    const cityList = ciudadData
      .filter((entry) => entry.country === selectedCountry)
      .map((entry) => entry.name);

    setCities(cityList);
  }, [selectedCountry]);

  const handleCountryChange = (event) => {
    const input = event.target.value;
    setSelectedCountry(input);

    const filteredCountries = countries.filter(
      (country) => country.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredCountries(filteredCountries);

    setCities([]);
  };

  const handleCityChange = (event) => {
    const input = event.target.value;
    setSelectedCity(input);

    const filteredCities = cities.filter(
      (city) => city.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredCities(filteredCities);
  };

  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
    setFilteredCountries([]);

    // Obtener la lista de ciudades del archivo estático para el país seleccionado
    const cityList = ciudadData
      .filter((entry) => entry.country === country)
      .map((entry) => entry.name);

    setCities(cityList);
  };

  const handleCitySelection = (city) => {
    setSelectedCity(city);
    // Busca la entrada correspondiente en el archivo ciudad.json
    const selectedCityEntry = ciudadData.find(entry => entry.name === city);
  
    if (selectedCityEntry) {
      // Llama a la función proporcionada con la ubicación seleccionada
      onLocationChange(selectedCityEntry.latitude, selectedCityEntry.longitude);
    }
  };
  
  if (!weatherData || !weatherData.hourly || !weatherData.hourly.time) {
    return <p>Datos meteorológicos no válidos</p>;
  }

  const fechaApi = new Date(weatherData.current.time);
  const { formatoFecha, formatoHora } = formatearFechaYHora(fechaApi);

  return (
    <>
      <ClimaInfo>
        <h3 className='ciudad'>
          Clima en {selectedCity ? `${selectedCity}, ${selectedCountry}` : '...'}
        </h3>
      </ClimaInfo>
      <p className='fecha-hora'>{`${formatoFecha}, ${formatoHora}`}</p>

      <DropdownContainer>
        <StyledLabel>Seleccione un país:</StyledLabel>
        <StyledInput
          value={selectedCountry}
          onChange={handleCountryChange}
          placeholder="Escriba para buscar..."
        />
        {filteredCountries.length > 0 && (
          <DropdownList>
            {filteredCountries.map((country) => (
              <DropdownItem
                key={country}
                onClick={() => handleCountrySelection(country)}
              >
                {country}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>

      <DropdownContainer>
        <StyledLabel>Seleccione una ciudad:</StyledLabel>
        <StyledInput
          value={selectedCity}
          onChange={handleCityChange}
          placeholder="Escriba para buscar..."
        />
        {filteredCities.length > 0 && (
          <DropdownList>
            {filteredCities.map((city) => (
              <DropdownItem key={city} onClick={() => handleCitySelection(city)}>
                {city}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    </>
  );
}

export default InfoCiudad;



/*import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { formatearFechaYHora } from './formatearFechaYHora';
import ciudadData from './ciudad.json'; // Importa el archivo estático

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

function InfoCiudad({ weatherData }) {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    // Extrae la lista de países del archivo estático
    const countryList = Array.from(new Set(ciudadData.map((entry) => entry.country)));
    setCountries(countryList);
  }, []);

  const handleCountryChange = (event) => {
    const input = event.target.value;
    setSelectedCountry(input);

    const filteredCountries = countries.filter(
      (country) => country.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredCountries(filteredCountries);

    setCities([]); // Reinicia la lista de ciudades al cambiar de país
  };

  const handleCityChange = (event) => {
    const input = event.target.value;
    setSelectedCity(input);

    const filteredCities = cities.filter(
      (city) => city.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredCities(filteredCities);
  };

  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
    setFilteredCountries([]);
    setCities([]); // Reinicia la lista de ciudades al cambiar de país

    // Extrae la lista de ciudades del archivo estático para el país seleccionado
    const cityList = ciudadData
      .filter((entry) => entry.country === country)
      .map((entry) => entry.name);

    setCities(cityList);
  };

  const handleCitySelection = (city) => {
    setSelectedCity(city);
    // Agrega la lógica para manejar el cambio de ubicación
    console.log(`Ubicación seleccionada: ${selectedCountry}, ${city}`);
  };

  if (!weatherData || !weatherData.hourly || !weatherData.hourly.time) {
    return <p>Datos meteorológicos no válidos</p>;
  }

  const fechaApi = new Date(weatherData.current.time);
  const { formatoFecha, formatoHora } = formatearFechaYHora(fechaApi);

  return (
    <>
      <ClimaInfo>
        <h3 className='ciudad'>
          Clima en {selectedCity ? `${selectedCity}, ${selectedCountry}` : '...'}
        </h3>
      </ClimaInfo>
      <p className='fecha-hora'>{`${formatoFecha}, ${formatoHora}`}</p>

      <DropdownContainer>
        <StyledLabel>Seleccione un país:</StyledLabel>
        <StyledInput
          value={selectedCountry}
          onChange={handleCountryChange}
          placeholder="Escriba para buscar..."
        />
        {filteredCountries.length > 0 && (
          <DropdownList>
            {filteredCountries.map((country) => (
              <DropdownItem
                key={country}
                onClick={() => handleCountrySelection(country)}
              >
                {country}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>

      <DropdownContainer>
        <StyledLabel>Seleccione una ciudad:</StyledLabel>
        <StyledInput
          value={selectedCity}
          onChange={handleCityChange}
          placeholder="Escriba para buscar..."
        />
        {filteredCities.length > 0 && (
          <DropdownList>
            {filteredCities.map((city) => (
              <DropdownItem key={city} onClick={() => handleCitySelection(city)}>
                {city}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    </>
  );
}

export default InfoCiudad;*/





/*import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { formatearFechaYHora } from './formatearFechaYHora';

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

function InfoCiudad({ weatherData, onLocationChange }) {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    // Fetch para obtener la lista de países al cargar el componente
    fetch('https://api.open-meteo.com/v1/forecast/country_list')
      .then((response) => response.json())
      .then((data) => {
        // Asegúrate de que data.results sea un array antes de mapearlo
        if (Array.isArray(data.results)) {
          setCountries(data.results.map((country) => country.name));
        } else {
          console.error("La respuesta de la API no tiene la estructura esperada:", data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener la lista de países:", error);
      });
  }, []);

  const handleCountryChange = (event) => {
    const input = event.target.value;
    setSelectedCountry(input);

    const filteredCountries = countries.filter(
      (country) => country.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredCountries(filteredCountries);

    setCities([]); // Reinicia la lista de ciudades al cambiar de país
  };

  const handleCityChange = (event) => {
    const input = event.target.value;
    setSelectedCity(input);

    const filteredCities = cities.filter(
      (city) => city.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredCities(filteredCities);
  };

  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
    setFilteredCountries([]);
    setCities([]); // Reinicia la lista de ciudades al cambiar de país

    // Fetch para obtener la lista de ciudades del país seleccionado
    fetch(`https://api.open-meteo.com/v1/forecast/city_list?country=${country}`)
      .then((response) => response.json())
      .then((data) => setCities(data.results.map((city) => city.name)))
      .catch((error) => {
        console.error("Error al obtener la lista de ciudades:", error);
      });
  };

  const handleCitySelection = (city) => {
    setSelectedCity(city);
    onLocationChange(selectedCountry, city); // Llama a la función proporcionada con la ubicación seleccionada
  };

  if (!weatherData || !weatherData.hourly || !weatherData.hourly.time) {
    return <p>Datos meteorológicos no válidos</p>;
  }

  const fechaApi = new Date(weatherData.current.time);
  const { formatoFecha, formatoHora } = formatearFechaYHora(fechaApi);

  return (
    <>
      <ClimaInfo>
        <h3 className='ciudad'>
          Clima en {selectedCity ? `${selectedCity}, ${selectedCountry}` : '...'}
        </h3>
      </ClimaInfo>
      <p className='fecha-hora'>{`${formatoFecha}, ${formatoHora}`}</p>

      <DropdownContainer>
        <StyledLabel>Seleccione un país:</StyledLabel>
        <StyledInput
          value={selectedCountry}
          onChange={handleCountryChange}
          placeholder="Escriba para buscar..."
        />
        {filteredCountries.length > 0 && (
          <DropdownList>
            {filteredCountries.map((country) => (
              <DropdownItem
                key={country}
                onClick={() => handleCountrySelection(country)}
              >
                {country}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>

      <DropdownContainer>
        <StyledLabel>Seleccione una ciudad:</StyledLabel>
        <StyledInput
          value={selectedCity}
          onChange={handleCityChange}
          placeholder="Escriba para buscar..."
        />
        {filteredCities.length > 0 && (
          <DropdownList>
            {filteredCities.map((city) => (
              <DropdownItem key={city} onClick={() => handleCitySelection(city)}>
                {city}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    </>
  );
}

export default InfoCiudad;*/



/*import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { formatearFechaYHora } from './formatearFechaYHora';

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
  width: 200px; /* Ajusta el ancho según tus necesidades 
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

function InfoCiudad({ weatherData, onLocationChange }) {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    // Fetch para obtener la lista de países al cargar el componente
    fetch('https://api.open-meteo.com/v1/forecast/country_list')
      .then((response) => response.json())
      .then((data) => {
        // Asegúrate de que data sea un array antes de mapearlo
        if (Array.isArray(data)) {
          setCountries(data.map(country => country.name));
        } else {
          console.error("La respuesta de la API no es un array:", data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener la lista de países:", error);
      });
  }, []);
  

  const handleCountryChange = (event) => {
    const input = event.target.value;
    setSelectedCountry(input);

    const filteredCountries = countries.filter(
      (country) => country.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredCountries(filteredCountries);

    setCities([]); // Reinicia la lista de ciudades al cambiar de país
  };

  const handleCityChange = (event) => {
    const input = event.target.value;
    setSelectedCity(input);

    const filteredCities = cities.filter(
      (city) => city.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredCities(filteredCities);
  };

  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
    setFilteredCountries([]);
    setCities([]); // Reinicia la lista de ciudades al cambiar de país

    // Fetch para obtener la lista de ciudades del país seleccionado
    fetch(`https://api.open-meteo.com/v1/forecast/city_list?country=${country}`)
      .then((response) => response.json())
      .then((data) => setCities(data));
  };

  const handleCitySelection = (city) => {
    setSelectedCity(city);
    onLocationChange(selectedCountry, city); // Llama a la función proporcionada con la ubicación seleccionada
  };

  if (!weatherData || !weatherData.hourly || !weatherData.hourly.time) {
    return <p>Datos meteorológicos no válidos</p>;
  }

  const fechaApi = new Date(weatherData.current.time);
  const { formatoFecha, formatoHora } = formatearFechaYHora(fechaApi);

  return (
    <>
      <ClimaInfo>
        <h3 className='ciudad'>
          Clima en {selectedCity ? `${selectedCity}, ${selectedCountry}` : '...'}
        </h3>
      </ClimaInfo>
      <p className='fecha-hora'>{`${formatoFecha}, ${formatoHora}`}</p>

      <DropdownContainer>
        <StyledLabel>Seleccione un país:</StyledLabel>
        <StyledInput
          value={selectedCountry}
          onChange={handleCountryChange}
          placeholder="Escriba para buscar..."
        />
        {filteredCountries.length > 0 && (
          <DropdownList>
            {filteredCountries.map((country) => (
              <DropdownItem
                key={country}
                onClick={() => handleCountrySelection(country)}
              >
                {country}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>

      <DropdownContainer>
        <StyledLabel>Seleccione una ciudad:</StyledLabel>
        <StyledInput
          value={selectedCity}
          onChange={handleCityChange}
          placeholder="Escriba para buscar..."
        />
        {filteredCities.length > 0 && (
          <DropdownList>
            {filteredCities.map((city) => (
              <DropdownItem key={city} onClick={() => handleCitySelection(city)}>
                {city}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    </>
  );
}

export default InfoCiudad;*/




/*import React, { useState, useEffect } from 'react';
import { formatearFechaYHora } from './formatearFechaYHora';

function InfoCiudad({ weatherData, onLocationChange }) {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    // Fetch para obtener la lista de países al cargar el componente
    fetch('https://api.open-meteo.com/v1/forecast/country_list')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const handleCountryChange = (event) => {
    const input = event.target.value;

    // Filtra la lista de países según la entrada del usuario
    const filteredCountries = countries.filter(
      (country) => country.toLowerCase().startsWith(input.toLowerCase())
    );

    setCities([]); // Reinicia la lista de ciudades al cambiar de país
    setSelectedCountry(input);
    setCountries(filteredCountries);
  };

  const handleCityChange = (event) => {
    const input = event.target.value;

    // Filtra la lista de ciudades según la entrada del usuario
    const filteredCities = cities.filter(
      (city) => city.toLowerCase().startsWith(input.toLowerCase())
    );

    setSelectedCity(input);
    setCities(filteredCities);
  };

  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
    setCities([]); // Reinicia la lista de ciudades al cambiar de país

    // Fetch para obtener la lista de ciudades del país seleccionado
    fetch(`https://api.open-meteo.com/v1/forecast/city_list?country=${country}`)
      .then((response) => response.json())
      .then((data) => setCities(data));
  };

  const handleCitySelection = (city) => {
    setSelectedCity(city);
    onLocationChange(selectedCountry, city); // Llama a la función proporcionada con la ubicación seleccionada
  };

  if (!weatherData || !weatherData.hourly || !weatherData.hourly.time) {
    return <p>Datos meteorológicos no válidos</p>;
  }

  const fechaApi = new Date(weatherData.current.time);
  const { formatoFecha, formatoHora } = formatearFechaYHora(fechaApi);

  return (
    <>
      <h3 className='ciudad'>Clima en {selectedCity ? `${selectedCity}, ${selectedCountry}` : '...'}</h3>
      <p className='fecha-hora'>{`${formatoFecha}, ${formatoHora}`}</p>

      <div>
        <label>Seleccione un país:</label>
        <select value={selectedCountry} onChange={handleCountryChange}>
          {Array.isArray(countries) &&
            countries.map((country) => (
              <option key={country} value={country} onClick={() => handleCountrySelection(country)}>
                {country}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label>Seleccione una ciudad:</label>
        <select value={selectedCity} onChange={handleCityChange}>
          {Array.isArray(cities) &&
            cities.map((city) => (
              <option key={city} value={city} onClick={() => handleCitySelection(city)}>
                {city}
              </option>
            ))}
        </select>
      </div>
    </>
  );
}

export default InfoCiudad;*/





/*import React from 'react';
import { formatearFechaYHora } from './formatearFechaYHora';

function InfoCiudad({ weatherData }) {
  if (!weatherData || !weatherData.hourly || !weatherData.hourly.time) {
    return <p>Datos meteorológicos no válidos</p>;
  }

  // Formatear la fecha y la hora utilizando la función importada//
  const fechaApi = new Date(weatherData.current.time);
  const { formatoFecha, formatoHora } = formatearFechaYHora(fechaApi);

  return (
    <>
      <h3 className='ciudad'>Clima en Buenos Aires</h3>
      <p className='fecha-hora'>{`${formatoFecha}, ${formatoHora}`}</p>
    </>
  );
}

export default InfoCiudad;*/