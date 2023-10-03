
import React from 'react';
import viento from './Imagenes/viento.svg'
import humedad from './Imagenes/humedad.svg'
import visibilidad from './Imagenes/visibilidad.svg'
import calidadAire from './Imagenes/calidadAire.png' 

function InfoDetalladaClima(props) {
  return (
    <div className = "info-detallada">
    <p className = 'humedad' ><img src={humedad} alt='Icono de humedad' className='icon'/> Humedad: {props.humedad } %</p>
    <p className='visibilidad'><img src={visibilidad} alt="Icono de visibilidad" className="icon"/> Visibilidad:{props.visibilidad} Km </p>
    <p className='viento'><img src={viento} alt="Ícono de viento" className='icon'/>Viento:{props.viento}  Km/hora </p>
    <p className='aire'><img src={calidadAire} alt="Ícono de calidad aire" className='icon'></img>Calidad del aire:{props.aire} </p>
    </div>
  );
}

export default InfoDetalladaClima;