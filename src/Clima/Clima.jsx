import React from 'react';
import InfoCiudad from './InfoCiudad'; 
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol'; 
import TemperaturaMinMax from './TemperaturaMinMax'; 
import TemperaturaPorHora from './TemperaturaPorHora';
import datosApi from './api.json'

function Clima() {
  const datosClima = {
    ciudad: 'Buenos Aires',
  }
    
  const datosPorHora = datosApi.hourly.time.map((hora, index) => ({
    hora,
    temperatura: datosApi.hourly.temperature_2m[index],
  }));

  return (
    <div className="clima-container">
      <InfoCiudad ciudad={datosClima.ciudad} />
      <InfoGeneralClima temperatura={datosClima.temperatura} fecha={datosClima.fecha} hora={datosClima.hora} />
      <InfoDetalladaClima humedad={datosClima.humedad} visibilidad={datosClima.visibilidad} viento={datosClima.viento} aire={datosClima.aire}/>
      <SalidaPuestaSol salida={datosClima.salida} puesta={datosClima.puesta} />
      <TemperaturaMinMax minima={datosClima.minima} maxima={datosClima.maxima} />
      <TemperaturaPorHora datosPorHora={datosPorHora} />
    </div>
  );
}

export default Clima;
