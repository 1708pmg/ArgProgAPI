import React from 'react';
import tempmax from './Imagenes/temp-max.png'
import tempmin from './Imagenes/temp-min.png'


function TemperaturaMinMax({weatherData}) {
  return (
    <div className="temp-min-max">

      <p className='temp-min'><img src={tempmin} alt='Icon Temperatura Minima ' className='icon-min' />Temperatura Minima: {weatherData.daily.temperature_2m_min} °</p>
      <p className='temp-max'><img src={tempmax} alt='Icon Temperatura Maxima ' className='icon-max' />Temperatura Maxima: {weatherData.daily.temperature_2m_max} °</p>

    </div>
  );
}

export default TemperaturaMinMax;