import React, { useState, useEffect } from 'react';
import './App.css';
import Clima from './Clima/Clima';
import Transporte from './Transporte/Transporte';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&current=temperature_2m,relativehumidity_2m,is_day,weathercode,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1')
      .then((resp) => resp.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((ex) => {
        console.error(ex);
        setLoading(false);
      });
  }, []);

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

export default App;




/*import React, { useState, useEffect } from 'react';
import './App.css';
import Clima from './Clima/Clima';
import Transporte from './Transporte/Transporte';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&current=temperature_2m,relativehumidity_2m,is_day,weathercode,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=America%2FSao_Paulo&forecast_days=1')
      .then((resp) => resp.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((ex) => {
        console.error(ex);
        setLoading(false);
      });
  }, []);



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





/*import React, { useState, useEffect } from 'react';
import './App.css';
import Clima from './Clima/Clima';
import Transporte from './Transporte/Transporte';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&current=temperature_2m,relativehumidity_2m,is_day,weathercode,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=America%2FSao_Paulo&forecast_days=1')
      .then((resp) => resp.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((ex) => {
        console.error(ex);
        setLoading(false); 
      });
  }, []);

  
  const weatherData = weatherData && weatherData.current;

  return (
    <div className="App">
      <div className="clima-container">
        {!loading && weatherData && <Clima {...weatherData} />}
        {loading && <h1>Cargando datos</h1>}
      </div>
      <div className="transporte-container">
        <Transporte />
      </div>
    </div>
  );
}

export default App;*/



/*import React, { useState, useEffect } from 'react';
import './App.css';
import Clima from './Clima/Clima';
import Transporte from './Transporte/Transporte';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&current=temperature_2m,relativehumidity_2m,is_day,weathercode,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=America%2FSao_Paulo&forecast_days=1')
      .then((resp) => resp.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((ex) => {
        console.error(ex);
      });
  }, []);

  return (
    <div className="App">
      <div className="clima-container">
        {!loading && weatherData && weatherData [latitude]}<div/>
        {loading && <h1>Cargando datos</h1>}
        <Clima {...weatherData} />
      </div>
      <div className="transporte-container">
        <Transporte />
      </div>
    </div>
  );
}

export default App;*/


