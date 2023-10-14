import React from 'react';
import InfoCiudad from './InfoCiudad';
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol';
import TemperaturaMinMax from './TemperaturaMinMax';
import TemperaturaPorHora from './TemperaturaPorHora';

function Clima ({weatherData}) {
if (!weatherData) {
  return <p>Datos meteorológicos no válidos</p>;
}

const datosPorHora = weatherData.hourly && weatherData.hourly.time
  ? weatherData.hourly.time.map((hora, index) => ({
    hora,
    temperatura: weatherData.hourly.temperature_2m[index],
  }))
  : [];

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

export default Clima;



/*import React from 'react';
import { format, parse } from 'date-fns';
import InfoCiudad from './InfoCiudad'; 
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol'; 
import TemperaturaMinMax from './TemperaturaMinMax'; 
import TemperaturaPorHora from './TemperaturaPorHora';

function Clima({ weatherData }) {
  if (!weatherData) {
    return <div>Cargando datos...</div>;
  }
 /* if (weatherData.current && weatherData.current.time) {
  } else {
    console.error("Datos de fecha no válidos:", weatherData.current);
  }
 
  const formatDate = (dateString) => {
    const parsedDate = parse(dateString, "yyyy-MM-dd'T'HH:mm", new Date());
    console.log(parsedDate)

    return format(parsedDate, "dd 'de' MM 'de' yyyy, HH:mm 'hs.'");
  
  };

  const datosApi = {
    temperatura: weatherData.hourly.temperature_2m,
    fecha:(weatherData.hourly.time[0]),
    hora: formatDate(weatherData.hourly.time[0]),
    humedad: weatherData.hourly.relativehumidity_2m,
    visibilidad: weatherData.hourly.visibility,
    viento: weatherData.current.winddirection_10m,
    indice: weatherData.current.uv_index_max,
    salida: formatDate(weatherData.daily.sunrise),
    puesta: formatDate(weatherData.daily.sunset),
    minima: weatherData.daily.temperature_2m_min,
    maxima: weatherData.daily.temperature_2m_max,
    codigo: weatherData.daily.weathercode[0],
  };

  const datosPorHora = weatherData.hourly.time.map((hora, index) => ({
    hora: formatDate(hora),
    temperatura: weatherData.hourly.temperature_2m[index],
  }));

  return (
    <div className="clima-container">
      <InfoCiudad datosApi={datosApi.fecha} />
      <InfoGeneralClima temperatura={datosApi.temperatura} fecha={datosApi.fecha} hora={datosApi.hora} weathercode={datosApi.codigo}/>
      <InfoDetalladaClima humedad={datosApi.humedad} visibilidad={datosApi.visibilidad} viento={datosApi.viento} aire={datosApi.aire}/>
      <SalidaPuestaSol salida={datosApi.salida} puesta={datosApi.puesta} />
      <TemperaturaMinMax minima={datosApi.minima} maxima={datosApi.maxima} />
      <TemperaturaPorHora datosPorHora={datosPorHora} />
    </div>
  );
}

export default Clima;*/



/*import React from 'react';
import { format, parse } from 'date-fns';
import InfoCiudad from './InfoCiudad'; 
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol'; 
import TemperaturaMinMax from './TemperaturaMinMax'; 
import TemperaturaPorHora from './TemperaturaPorHora';

function Clima({ weatherData }) {
  if (!weatherData) {
    return <div>Cargando datos...</div>;
  }

  const formatDate = (dateString) => {
    const parsedDate = parse(dateString, "yyyy-MM-dd'T'HH:mm", new Date());
    return format(parsedDate, "dd 'de' MMMM 'de' yyyy, HH:mm 'hs.'");
  };


  const datosApi = {
    temperatura: weatherData.current.temperature_2m,
    fecha: formatDate(weatherData.current.time),
    hora: formatDate(weatherData.current.time),
    humedad: weatherData.current.relativehumidity_2m,
    visibilidad: weatherData.hourly.visibility,
    viento: weatherData.current.winddirection_10m,
    aire: weatherData.current.uv_index_max,
    salida: formatDate(weatherData.daily.sunrise),
    puesta: formatDate(weatherData.daily.sunset),
    minima: weatherData.daily.temperature_2m_min,
    maxima: weatherData.daily.temperature_2m_max,
  };

  const datosPorHora = weatherData.hourly.time.map((hora, index) => ({
    hora: formatDate(hora),
    temperatura: weatherData.hourly.temperature_2m[index],
  }));

  return (
    <div className="clima-container">
      <InfoCiudad datosApi={datosApi} />
      <InfoGeneralClima temperatura={datosApi.temperatura} fecha={datosApi.fecha} hora={datosApi.hora} />
      <InfoDetalladaClima humedad={datosApi.humedad} visibilidad={datosApi.visibilidad} viento={datosApi.viento} aire={datosApi.aire}/>
      <SalidaPuestaSol salida={datosApi.salida} puesta={datosApi.puesta} />
      <TemperaturaMinMax minima={datosApi.minima} maxima={datosApi.maxima} />
      <TemperaturaPorHora datosPorHora={datosPorHora} />
    </div>
  );
}

export default Clima;*/















/*import React from 'react';
import InfoCiudad from './InfoCiudad'; 
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol'; 
import TemperaturaMinMax from './TemperaturaMinMax'; 
import TemperaturaPorHora from './TemperaturaPorHora';

function Clima({ weatherData }) {
  if (!weatherData) {
    return <div>Cargando datos...</div>;
  }

  const datosApi = {
  
    temperatura: weatherData.current.temperature_2m,
    fecha: weatherData.current.time,
    hora: weatherData.current.time,
    humedad: weatherData.current.relativehumidity_2m,
    visibilidad: weatherData.hourly.visibility,
    viento: weatherData.current.winddirection_10m,
    aire: weatherData.current.uv_index_max,
    salida: weatherData.daily.sunrise,
    puesta: weatherData.daily.sunset,
    minima: weatherData.daily.temperature_2m_min,
    maxima: weatherData.daily.temperature_2m_max,
  };

  const datosPorHora = weatherData.hourly.time.map((hora, index) => ({
    hora,
    temperatura: weatherData.hourly.temperature_2m[index],
  }));

  return (
    <div className="clima-container">
      <InfoCiudad datosApi={datosApi} />
      <InfoGeneralClima temperatura={datosApi.temperatura} fecha={datosApi.fecha} hora={datosApi.hora} />
      <InfoDetalladaClima humedad={datosApi.humedad} visibilidad={datosApi.visibilidad} viento={datosApi.viento} aire={datosApi.aire}/>
      <SalidaPuestaSol salida={datosApi.salida} puesta={datosApi.puesta} />
      <TemperaturaMinMax minima={datosApi.minima} maxima={datosApi.maxima} />
      <TemperaturaPorHora datosPorHora={datosPorHora} />
    </div>
  );
}

export default Clima;*/


/*import React from 'react';
import InfoCiudad from './InfoCiudad'; 
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol'; 
import TemperaturaMinMax from './TemperaturaMinMax'; 
import TemperaturaPorHora from './TemperaturaPorHora';

function Clima() {
  
  const datosPorHora = weatherData.hourly.time.map((hora, index) => ({
    hora,
    temperatura: weatherData.hourly.temperature_2m[index],
  }));


  return (
    <div className="clima-container">
      <InfoCiudad datosApi={datosApi} />
      <InfoGeneralClima temperatura={datosApi.temperatura} fecha={datosApi.fecha} hora={datosApi.hora} />
      <InfoDetalladaClima humedad={datosApi.humedad} visibilidad={datosApi.visibilidad} viento={datosApi.viento} aire={datosApi.aire}/>
      <SalidaPuestaSol salida={datosApi.salida} puesta={datosApi.puesta} />
      <TemperaturaMinMax minima={datosApi.minima} maxima={datosApi.maxima} />
      <TemperaturaPorHora datosPorHora={datosPorHora} />
    </div>
  );
}

export default Clima;*/
