
import React, { useState, useEffect } from 'react';
import '../App.css';
import InfoCiudad from './InfoCiudad';
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol';
import TemperaturaMinMax from './TemperaturaMinMax';
import TemperaturaPorHora from './TemperaturaPorHora';
import ciudadData from './ciudad.json';

function Clima() {
  const [weatherData, setWeatherData] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [selectedCity, setSelectedCity] = useState('');

  const fetchWeatherData = (latitude, longitude) => {
    setLoadingWeather(true);

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relativehumidity_2m,is_day,weathercode,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setWeatherData(data);
        setLoadingWeather(false);
      })
      .catch((ex) => {
        console.error(ex);
        setLoadingWeather(false);
      });
  };



  useEffect(() => {
    // Llamada inicial para cargar datos meteorológicos con ubicación predeterminada
    fetchWeatherData(-34.6131, -58.3772);
  }, []);

  useEffect(() => {
    // Manejar actualizaciones después de seleccionar una ciudad
    if (selectedCity) {
      const [name, country] = selectedCity.split(', ');
      const selectedCityEntry = ciudadData.find(
        (entry) => entry.name === name && entry.country === country
      );

      if (selectedCityEntry) {
        fetchWeatherData(selectedCityEntry.latitude, selectedCityEntry.longitude);
      }
    }
  }, [selectedCity]);

  if (loadingWeather) {
    return <h1>Cargando datos meteorológicos</h1>;
  }

  return (
    <div className="clima-container">

      <InfoCiudad weatherData={weatherData} selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <InfoGeneralClima weatherData={weatherData} />
      <InfoDetalladaClima weatherData={weatherData} />
      <SalidaPuestaSol weatherData={weatherData} />
      <TemperaturaMinMax weatherData={weatherData} />
      <TemperaturaPorHora weatherData={weatherData} />
    </div>
  );
}

export default Clima;
