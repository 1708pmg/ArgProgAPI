
import React, { useState, useEffect } from 'react';
import '../App.css';
import InfoCiudad from './InfoCiudad';
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol';
import TemperaturaMinMax from './TemperaturaMinMax';
import TemperaturaPorHora from './TemperaturaPorHora';

function Clima() {
  const [weatherData, setWeatherData] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);

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

  const handleLocationChange = (latitude, longitude) => {
    // Actualiza los datos meteorológicos cuando cambia la ubicación
    fetchWeatherData(latitude, longitude);
  };

  useEffect(() => {
    // Llamada inicial para cargar datos meteorológicos con ubicación predeterminada
    fetchWeatherData(-34.6131, -58.3772);
  }, []);

  if (loadingWeather) {
    return <h1>Cargando datos meteorológicos</h1>;
  }

  return (
    <div className="clima-container">
    
      <InfoCiudad weatherData={weatherData} setWeatherData={setWeatherData} onLocationChange={handleLocationChange} />
      <InfoGeneralClima weatherData={weatherData} />
      <InfoDetalladaClima weatherData={weatherData} />
      <SalidaPuestaSol weatherData={weatherData} />
      <TemperaturaMinMax weatherData={weatherData} />
      <TemperaturaPorHora weatherData={weatherData} />
    </div>
  );
}

export default Clima;



/*import React, { useState, useEffect } from 'react';
import '../App.css';
import InfoCiudad from './InfoCiudad';
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol';
import TemperaturaMinMax from './TemperaturaMinMax';
import TemperaturaPorHora from './TemperaturaPorHora';

function Clima() {
  const [weatherData, setWeatherData] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);

  const fetchInitialWeather = () => {
    // Coordenadas iniciales para Buenos Aires (puedes ajustar esto según tus necesidades)
    const initialLatitude = -34.6131;
    const initialLongitude = -58.3772;

    // Llama a la función para obtener datos meteorológicos
    handleLocationChange(initialLatitude, initialLongitude);
  };

  useEffect(() => {
    // Fetch para datos meteorológicos inicial
    fetchInitialWeather();
  }, []); // El efecto se ejecuta solo al montar el componente.

  const handleLocationChange = (latitude, longitude) => {
    // Fetch para datos meteorológicos utilizando la latitude y longitude
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

  if (loadingWeather) {
    return <h1>Cargando datos meteorológicos</h1>;
  }

  return (
    <div className="clima-container">
      <InfoCiudad
        weatherData={weatherData}
        onLocationChange={handleLocationChange}
      />
      <InfoGeneralClima weatherData={weatherData} />
      <InfoDetalladaClima weatherData={weatherData} />
      <SalidaPuestaSol weatherData={weatherData} />
      <TemperaturaMinMax weatherData={weatherData} />
      <TemperaturaPorHora weatherData={weatherData} />
    </div>
  );
}

export default Clima;*/



/*import React, { useState, useEffect } from 'react';
import '../App.css';
import InfoCiudad from './InfoCiudad';
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol';
import TemperaturaMinMax from './TemperaturaMinMax';
import TemperaturaPorHora from './TemperaturaPorHora';

function Clima() {
  const [weatherData, setWeatherData] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const fetchInitialWeather = async () => {
    setLoadingWeather(true);

    try {
      const resp = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&current=temperature_2m,relativehumidity_2m,is_day,weathercode,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1`
      );
      const data = await resp.json();
      setWeatherData(data);
      setLoadingWeather(false);
    } catch (ex) {
      console.error(ex);
      setLoadingWeather(false);
    }
  };

  useEffect(() => {
    fetchInitialWeather();
  }, []); // El efecto se ejecuta solo al montar el componente.

  const handleLocationChange = (country, city) => {
    // Puedes hacer lo que necesites con la ubicación seleccionada
    console.log(`Ubicación seleccionada: ${country}, ${city}`);
    setSelectedCountry(country);
    setSelectedCity(city);
  };

  if (loadingWeather) {
    return <h1>Cargando datos meteorológicos</h1>;
  }

  return (
    <div className="clima-container">
      <InfoCiudad
        weatherData={weatherData}
        onLocationChange={handleLocationChange}
      />
      <InfoGeneralClima weatherData={weatherData} />
      <InfoDetalladaClima weatherData={weatherData} />
      <SalidaPuestaSol weatherData={weatherData} />
      <TemperaturaMinMax weatherData={weatherData} />
      <TemperaturaPorHora weatherData={weatherData} />
    </div>
  );
}

export default Clima;*/




/*import React, { useState, useEffect } from 'react';
import '../App.css';
import InfoCiudad from './InfoCiudad';
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol';
import TemperaturaMinMax from './TemperaturaMinMax';
import TemperaturaPorHora from './TemperaturaPorHora';

function Clima() {
  const [weatherData, setWeatherData] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const fetchInitialWeather = async () => {
    setLoadingWeather(true);

    try {
      const resp = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&current=temperature_2m,relativehumidity_2m,is_day,weathercode,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1`
      );
      const data = await resp.json();
      setWeatherData(data);
      setLoadingWeather(false);
    } catch (ex) {
      console.error(ex);
      setLoadingWeather(false);
    }
  };

  useEffect(() => {
    fetchInitialWeather();
  }, []); // El efecto se ejecuta solo al montar el componente.

  const handleLocationChange = (country, city) => {
    // Puedes hacer lo que necesites con la ubicación seleccionada
    console.log(`Ubicación seleccionada: ${country}, ${city}`);
    setSelectedCountry(country);
    setSelectedCity(city);
  };

  if (loadingWeather) {
    return <h1>Cargando datos meteorológicos</h1>;
  }

  return (
    <div className="clima-container">
      <InfoCiudad
        weatherData={weatherData}
        onLocationChange={handleLocationChange}
      />
      <InfoGeneralClima weatherData={weatherData} />
      <InfoDetalladaClima weatherData={weatherData} />
      <SalidaPuestaSol weatherData={weatherData} />
      <TemperaturaMinMax weatherData={weatherData} />
      <TemperaturaPorHora weatherData={weatherData} />
    </div>
  );
}

export default Clima;*/



/*import React, { useState, useEffect } from 'react';
import '../App.css';
import InfoCiudad from './InfoCiudad';
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol';
import TemperaturaMinMax from './TemperaturaMinMax';
import TemperaturaPorHora from './TemperaturaPorHora';

function Clima() {
  const [weatherData, setWeatherData] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);

  const fetchInitialWeather = () => {
    // Coordenadas iniciales para Buenos Aires (puedes ajustar esto según tus necesidades)
    const initialLatitude = -34.6131;
    const initialLongitude = -58.3772;

    // Llama a la función para obtener datos meteorológicos
    handleLocationChange(initialLatitude, initialLongitude);
  };

  useEffect(() => {
    // Fetch para datos meteorológicos inicial
    fetchInitialWeather();
  }, []); // El efecto se ejecuta solo al montar el componente.

  const handleLocationChange = (latitude, longitude) => {
    // Fetch para datos meteorológicos utilizando la latitude y longitude
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

  if (loadingWeather) {
    return <h1>Cargando datos meteorológicos</h1>;
  }

  return (
    <div className="clima-container">
      <InfoCiudad
        weatherData={weatherData}
        onLocationChange={handleLocationChange}
      />
      <InfoGeneralClima weatherData={weatherData} />
      <InfoDetalladaClima weatherData={weatherData} />
      <SalidaPuestaSol weatherData={weatherData} />
      <TemperaturaMinMax weatherData={weatherData} />
      <TemperaturaPorHora weatherData={weatherData} />
    </div>
  );
}

export default Clima;*/



/*import React, { useState, useEffect } from 'react';
import '../App.css';
import InfoCiudad from './InfoCiudad';
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol';
import TemperaturaMinMax from './TemperaturaMinMax';
import TemperaturaPorHora from './TemperaturaPorHora';

function Clima() {
  const [weatherData, setWeatherData] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const fetchInitialWeather = async () => {
    setLoadingWeather(true);

    try {
      const resp = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&current=temperature_2m,relativehumidity_2m,is_day,weathercode,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1`
      );
      const data = await resp.json();
      setWeatherData(data);
      setLoadingWeather(false);
    } catch (ex) {
      console.error(ex);
      setLoadingWeather(false);
    }
  };

  useEffect(() => {
    fetchInitialWeather();
  }, []); // El efecto se ejecuta solo al montar el componente.

  const handleLocationChange = (country, city) => {
    // Puedes hacer lo que necesites con la ubicación seleccionada
    console.log(`Ubicación seleccionada: ${country}, ${city}`);
    setSelectedCountry(country);
    setSelectedCity(city);
  };

  if (loadingWeather) {
    return <h1>Cargando datos meteorológicos</h1>;
  }

  return (
    <div className="clima-container">
      <InfoCiudad
        weatherData={weatherData}
        onLocationChange={handleLocationChange}
      />
      <InfoGeneralClima weatherData={weatherData} />
      <InfoDetalladaClima weatherData={weatherData} />
      <SalidaPuestaSol weatherData={weatherData} />
      <TemperaturaMinMax weatherData={weatherData} />
      <TemperaturaPorHora weatherData={weatherData} />
    </div>
  );
}

export default Clima;*/

/*import React, { useState, useEffect } from 'react';
import '../App.css';
import InfoCiudad from './InfoCiudad';
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol';
import TemperaturaMinMax from './TemperaturaMinMax';
import TemperaturaPorHora from './TemperaturaPorHora';

function Clima() {
  const [weatherData, setWeatherData] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);
 const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    // Fetch para datos meteorológicos
    if (selectedCity) {
      setLoadingWeather(true);

      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.latitude}&longitude=${selectedCity.longitude}&current=temperature_2m,relativehumidity_2m,is_day,weathercode,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1`
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
    }
  }, [selectedCity]); // El efecto se ejecuta cuando selectedCity cambia

  const handleLocationChange = (latitude, longitude) => {
    // Puedes hacer lo que necesites con las coordenadas de la ubicación seleccionada
    console.log(`Ubicación seleccionada: ${latitude}, ${longitude}`);
    setSelectedCity({ latitude, longitude });
  };

  if (loadingWeather) {
    return <h1>Cargando datos meteorológicos</h1>;
  }

  return (
    <div className="clima-container">
      <InfoCiudad
        weatherData={weatherData}
        onLocationChange={handleLocationChange}
      />
      <InfoGeneralClima weatherData={weatherData} />
      <InfoDetalladaClima weatherData={weatherData} />
      <SalidaPuestaSol weatherData={weatherData} />
      <TemperaturaMinMax weatherData={weatherData} />
      <TemperaturaPorHora weatherData={weatherData} />
    </div>
  );
}

export default Clima;*/







/*import React, { useState, useEffect } from 'react';
import '../App.css';
import InfoCiudad from './InfoCiudad';
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol';
import TemperaturaMinMax from './TemperaturaMinMax';
import TemperaturaPorHora from './TemperaturaPorHora';

function Clima() {
  const [weatherData, setWeatherData] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);

  useEffect(() => {
    // Fetch para datos meteorológicos
    setLoadingWeather(true);

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&current=temperature_2m,relativehumidity_2m,is_day,weathercode,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1`
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

  const handleLocationChange = (country, city) => {
    // Puedes hacer lo que necesites con la ubicación seleccionada
    console.log(`Ubicación seleccionada: ${country}, ${city}`);
  };

  if (loadingWeather) {
    return <h1>Cargando datos meteorológicos</h1>;
  }

  return (
    <div className="clima-container">
      <InfoCiudad
        weatherData={weatherData}
        onLocationChange={handleLocationChange}
      />
      <InfoGeneralClima weatherData={weatherData} />
      <InfoDetalladaClima weatherData={weatherData} />
      <SalidaPuestaSol weatherData={weatherData} />
      <TemperaturaMinMax weatherData={weatherData} />
      <TemperaturaPorHora weatherData={weatherData} />
    </div>
  );
}

export default Clima;*/



/*import React, { useState, useEffect } from 'react';
import '../App.css';
import InfoCiudad from './InfoCiudad';
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol';
import TemperaturaMinMax from './TemperaturaMinMax';
import TemperaturaPorHora from './TemperaturaPorHora';

function Clima() {
  const [weatherData, setWeatherData] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    // Fetch para datos meteorológicos
    setLoadingWeather(true);

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&current=temperature_2m,relativehumidity_2m,is_day,weathercode,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1`
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

  const handleLocationChange = (country, city) => {
    // Puedes hacer lo que necesites con la ubicación seleccionada
    console.log(`Ubicación seleccionada: ${country}, ${city}`);
    setSelectedCountry(country);
    setSelectedCity(city);
  };

  if (loadingWeather) {
    return <h1>Cargando datos meteorológicos</h1>;
  }

  return (
    <div className="clima-container">
      <InfoCiudad
        weatherData={weatherData}
        onLocationChange={handleLocationChange}
      />
      <InfoGeneralClima weatherData={weatherData} />
      <InfoDetalladaClima weatherData={weatherData} />
      <SalidaPuestaSol weatherData={weatherData} />
      <TemperaturaMinMax weatherData={weatherData} />
      <TemperaturaPorHora weatherData={weatherData} />
    </div>
  );
}

export default Clima;*/

/*import React, { useState, useEffect } from 'react';
import InfoCiudad from './InfoCiudad';
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol';
import TemperaturaMinMax from './TemperaturaMinMax';
import TemperaturaPorHora from './TemperaturaPorHora';

function Clima () {
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

if (loadingWeather){
  return<h1>Cargando datos meteorológicos</h1>}

return (
  <div className="clima-container">
    <InfoCiudad weatherData={weatherData} />
    <InfoGeneralClima weatherData={weatherData}/>
    <InfoDetalladaClima weatherData={weatherData} />
    <SalidaPuestaSol weatherData={weatherData} />
    <TemperaturaMinMax weatherData={weatherData} />
    <TemperaturaPorHora weatherData={weatherData} />
  </div>
);
}

export default Clima;*/
