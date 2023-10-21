import React, { useState, useEffect } from 'react';
import './App.css';
import Clima from './Clima/Clima';
import TransporteApi from './Transporte/TransporteApi.jsx';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);

  useEffect(() => {
    // Fetch para datos meteorológicos
    setLoadingWeather(true);

    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&current=temperature_2m,relativehumidity_2m,is_day,weathercode,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1'
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
  }, []); // El efecto se ejecuta solo al montar el componente.

  return (
    <div className="App">
      {/* Sección para mostrar el clima */}
      <div className="clima-container">
        {!loadingWeather && weatherData && <Clima weatherData={weatherData} />}
        {loadingWeather && <h1>Cargando datos meteorológicos</h1>}
      </div>

      {/* Sección para mostrar el transporte */}
      <div className="transporte-container">
        <TransporteApi />
      </div>
    </div>
  );
}

export default App;



/*import { useEffect, useState } from "react";
import './App.css';
import Clima from './Clima/Clima';
import Transporte from './Transporte/TransporteApi.jsx';

function App() {
  // Estado para almacenar los datos meteorológicos y el estado de carga.
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Efecto para cargar los datos meteorológicos al montar el componente.
  useEffect(() => {
    // Inicia el estado de carga.
    setLoading(true);

    // Realiza una solicitud a la API para obtener datos meteorológicos.
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&current=temperature_2m,relativehumidity_2m,is_day,weathercode,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1')
      .then((resp) => resp.json())
      .then((data) => {
        // Actualiza el estado con los datos meteorológicos y finaliza la carga.
        setWeatherData(data);
        setLoading(false);
      })
      .catch((ex) => {
        // Maneja errores durante la solicitud y finaliza la carga.
        console.error(ex);
        setLoading(false);
      });
  }, []); // El efecto se ejecuta solo al montar el componente.
  return (
    <div className="App">
     
      <div className="clima-container">
        {!loading && weatherData && <Clima weatherData={weatherData} />}
        {loading && <h1>Cargando datos</h1>}
      </div>

      
      <div className="transporte-container">
        <Transporte />
      </div>
    </div>
  );
}

export default App;*/