import React from 'react';
import InfoCiudad from './InfoCiudad'; 
import InfoDetalladaClima from './InfoDetalladaClima';
import InfoGeneralClima from './InfoGeneralClima';
import SalidaPuestaSol from './SalidaPuestaSol'; 
import TemperaturaMinMax from './TemperaturaMinMax'; 
import TemperaturaPorHora from './TemperaturaPorHora';

function Clima() {
  const datosClima = {
    ciudad: 'Buenos Aires',
    temperatura: 25,
    fecha: "15 setiembre 2023", 
    hora: "17.00",
    humedad: 60,
    visibilidad: 10,
    viento: 10,
    aire: "buena",
    salida: 7.01,
    puesta: 19.05,
    minima: 5,
    maxima: 10,
    /*porhora: 10,*/
  };
  /*const datosPorHora=json.hourly.time [0]
  const temperaturaPorHora=json.hourly.temperature_2m*/
  const datosPorHora = [
    /*{ hora: json.hourly.time[1], temperatura: json.hourly.temperature_2m[1]},*/
    /*  */
    { hora: '0 AM', temperatura: 19 },
    { hora: '1 AM', temperatura: 19 },
    { hora: '2 AM', temperatura: 19 },
    { hora: '3 AM', temperatura: 20 },
    { hora: '4 AM', temperatura: 20 },
    { hora: '5 AM', temperatura: 20 },
    { hora: '6 AM', temperatura: 21 },
    { hora: '7 AM', temperatura: 21 },
    { hora: '8 AM', temperatura: 22 },
    { hora: '9 AM', temperatura: 22 },
    { hora: '10 AM', temperatura: 23 },
    { hora: '11 AM', temperatura: 24 },
    { hora: '12 AM', temperatura: 25 },
    { hora: '1 PM', temperatura: 26 },
    { hora: '2 PM', temperatura: 27 },
    { hora: '4 PM', temperatura: 28 },
    { hora: '5 PM', temperatura: 28 },
    { hora: '6 PM', temperatura: 28 },
    { hora: '7 PM', temperatura: 27 },
    { hora: '8 PM', temperatura: 27 },
    { hora: '9 PM', temperatura: 25 },
    { hora: '10 PM', temperatura: 25 },
    { hora: '11 PM', temperatura: 25 },
    
  ];
  

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
