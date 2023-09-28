import React from 'react';

function TemperaturaMinMax(props) {
  return (
    <div className="temp-min-max">
      <p className='temp'>Temperatura Minima: {props.minima} °</p> 
      <p className='temp'>Temperatura Maxima: {props.maxima} °</p>
    </div>
  );
}

export default TemperaturaMinMax;
