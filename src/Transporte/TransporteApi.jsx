import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import LineaColectivoDropdown from './LineaColectivoDropdown';
import transportData from '../data/transportData.json';

const TransporteApi = () => {
  const [selectedLinea, setSelectedLinea] = useState('');

  const position = [-34.61315, -58.37723];

  // Obtener todas las lineas únicas
  const lineas = Array.from(new Set(transportData.map((linea) => linea.route_short_name)));

  const filteredTransportData = selectedLinea
    ? transportData?.filter((linea) => linea.route_short_name === selectedLinea)
    : transportData;

  useEffect(() => {
    // Puedes agregar aquí lógica adicional si es necesario
  }, []); // Puedes eliminar el array de dependencias si solo quieres que se ejecute una vez

  return (
    <div className="transporte-container">
      <h4>Transporte en Ciudad de Buenos Aires</h4>

      <LineaColectivoDropdown lineas={lineas} onSelectLinea={setSelectedLinea} />

      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredTransportData &&
          filteredTransportData.map((linea) => (
            <Marker
              key={linea.route_id}
              position={[linea.latitude, linea.longitude]}
            >
              <Popup>
                <p>Línea: {linea.route_short_name}</p>
                <p>Destino: {linea.trip_headsign}</p>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default TransporteApi;


/*import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import NumeroLineaColectivo from './NumeroLineaColectivo';
import LineaColectivoDropdown from './LineaColectivoDropdown';
import transportData from '../data/transportData.json';

const TransporteApi = () => {
  const [loadingTransport, setLoadingTransport] = useState(false);
  const [selectedLinea, setSelectedLinea] = useState('');

  const position = [-34.61315, -58.37723];

  const lineas = [...new Set(transportData.map((linea) => linea.route_short_name))];

  const filteredTransportData = selectedLinea
    ? transportData?.filter((linea) => linea.route_short_name === selectedLinea)
    : transportData;

  useEffect(() => {
    // Puedes agregar aquí lógica adicional si es necesario
  }, []); // Puedes eliminar el array de dependencias si solo quieres que se ejecute una vez

  return (
    <div className="transporte-container">
      <LineaColectivoDropdown lineas={lineas} onSelectLinea={setSelectedLinea} />
      <h2>Transporte en Buenos Aires</h2>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {loadingTransport ? (
          <p>Cargando datos de transporte...</p>
        ) : (
          filteredTransportData &&
          filteredTransportData.map((linea) => (
            <Marker
              key={linea.route_id}
              position={[linea.latitude, linea.longitude]}
            >
              <Popup>
                <NumeroLineaColectivo numero={linea.route_short_name} />
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
    </div>
  );
};

export default TransporteApi;*/





/*import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import NumeroLineaColectivo from './NumeroLineaColectivo';
import LineaColectivoDropdown from './LineaColectivoDropdown';
import transportData from '../data/transportData.json';


const TransporteApi = () => {
  const [transportData, setTransportData] = useState(null);
  const [loadingTransport, setLoadingTransport] = useState(true);
  const [selectedLinea, setSelectedLinea] = useState('');

  const fetchTransportData = () => {
    fetch(
      'https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1'
    )
      .then((resp) => resp.json())
      .then((data) => {
        setTransportData(data);
        setLoadingTransport(false);
      })
      .catch((ex) => {
        console.error(ex);
        setLoadingTransport(false);
      });
  };

  useEffect(() => {
    // Realizar la primera solicitud al montar el componente
    fetchTransportData();

    // Establecer un intervalo para actualizar cada 5 minutos
    const intervalId = setInterval(fetchTransportData, 5 * 60 * 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  const position = [-34.61315, -58.37723];

  const lineas = [
    // ... tu arreglo de datos ...
  ];

  const filteredTransportData = selectedLinea
    ? transportData?.filter((linea) => linea.route_short_name === selectedLinea)
    : transportData;

  return (
    <div className="transporte-container">
      <LineaColectivoDropdown lineas={lineas} onSelectLinea={setSelectedLinea} />
      <h2>Transporte en Buenos Aires</h2>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {loadingTransport ? (
          <p>Cargando datos de transporte...</p>
        ) : (
          filteredTransportData &&
          filteredTransportData.map((linea) => (
            <Marker
              key={linea.route_id_id}
              position={[linea.latitude, linea.longitude]}
            >
              <Popup>
                <NumeroLineaColectivo numero={linea.route_short_name} />
               
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
    </div>
  );
};

export default TransporteApi;*/



/*import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import transportData from '../data/transportData.json'; // Importa los datos del archivo JSON

const TransporteApi = () => {
  const [loadingTransport, setLoadingTransport] = useState(true);

  useEffect(() => {
    // Simula la carga de datos con un retraso de 1 segundo (puedes eliminar esto en producción)
    const timeoutId = setTimeout(() => {
      setLoadingTransport(false);
    }, 10000);

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timeoutId);
  }, []);

  const position = [-34.61315, -58.37723];
  const cityPosition = [-34.61315, -58.377239]; // Posición de la ciudad

  return (
    <div className="transporte-container">
      <h2>Transporte en Ciudad de Buenos Aires</h2>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {loadingTransport ? (
          <p>Cargando datos de transporte...</p>
        ) : (
          <>
            
            <Marker position={cityPosition}>
              <Popup>
                Ciudad de Buenos Aires.
              </Popup>
            </Marker>
            
            
            {transportData.map((linea) => (
              <Marker
                key={linea.route_id}
                position={[linea.latitude, linea.longitude]}
              >
                <Popup >
                  <p>Línea: {linea.route_short_name}</p>
                  <p>Destino: {linea.trip_headsign}</p>

                </Popup>
              </Marker>
            ))}
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default TransporteApi;*/


/*import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup,useMap } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';

const TransporteApi = () => {
  const [transportData, setTransportData] = useState(null);
  const [loadingTransport, setLoadingTransport] = useState(true);

  const fetchTransportData = () => {
    fetch(
      'https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1'
    )
      .then((resp) => resp.json())
      .then((data) => {
        setTransportData(data);
        setLoadingTransport(false);
      })
      .catch((ex) => {
        console.error(ex);
        setLoadingTransport(false);
      });
  };

  useEffect(() => {
    // Realizar la primera solicitud al montar el componente
    fetchTransportData();

    // Establecer un intervalo para actualizar cada 5 minutos
    const intervalId = setInterval(fetchTransportData, 5 * 60 * 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  const position = [-34.61315, -58.37723];

  return (
    <div className="transporte-container">
      <h2>Transporte en Buenos Aires</h2>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {loadingTransport ? (
          <p>Cargando datos de transporte...</p>
        ) : (
          transportData && transportData.map((linea) => (
            <Marker
              key={linea.route_id}
              position={[linea.latitude, linea.longitude]}
            >
              <Popup>
               <p>Línea: {linea.route_short_name}</p>
               <p>Destino: {linea.trip_headsign}</p>
                
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
    </div>
  );
};

export default TransporteApi;*/




/*import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';

const TransporteApi = () => {
  const [transportData, setTransportData] = useState(null);
  const [loadingTransport, setLoadingTransport] = useState(true);

  const fetchTransportData = () => {
    fetch('https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id= cb6b18c84b3b484d98018a791577af52 &client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6')

      .then((resp) => resp.json())
      .then((data) => {
        setTransportData(data);
        setLoadingTransport(false);
      })
      .catch((ex) => {
        console.error(ex);
        setLoadingTransport(false);
      });
  };

  useEffect(() => {
    // Realizar la primera solicitud al montar el componente
    fetchTransportData();

    // Establecer un intervalo para actualizar cada 5 minutos
    const intervalId = setInterval(fetchTransportData, 5 * 60 * 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  const position = [-34.61315, -58.37723];

  return (
    <div className="transporte-container">
      <h2>Transporte en Buenos Aires</h2>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {loadingTransport ? (
          <p>Cargando datos de transporte...</p>
        ) : (
          transportData.map((vehicle) => (
            <Marker
              key={vehicle.vehicle_id}
              position={[vehicle.position.latitude, vehicle.position.longitude]}
            >
              <Popup>
                <p>ID del vehículo: {vehicle.vehicle_id}</p>
               
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
    </div>
  );
};

export default TransporteApi;*/

/*import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet'

const position = [-34.61315, -58.37723]

function Transporte(props) {
  return (
    <div className="transporte-container">
      <h3>Transporte en Ciudad de Buenos Aires</h3>
      <MapContainer center={[-34.61315, -58.37723]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-34.61315, -58.37723]}>
          <Popup>
            Ciudad de Buenos Aires
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Transporte;*/
