import React from 'react';

function TemperaturaMinMax(props) {
  return (
    <div className="temp-min-max">
      <p className='temp-min'>Temperatura Minima: {props.minima} °</p> 
      <p className='temp-max'>Temperatura Maxima: {props.maxima} °</p>
    </div>
  );
}

export default TemperaturaMinMax;
