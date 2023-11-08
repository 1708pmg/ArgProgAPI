/*import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import Select from 'react-select';
import LineasImagenes from './LineasImagenes';
import 'react-select/dist/react-select.css';

// Define las líneas de colectivo filtradas
const lineasFiltradas = ['5A', '7B', '19A', '24A', '29A', '92A', '109A', '124A', '132A', '148A'];

// Define el componente principal
const TransporteApi = () => {
  // Define estados para el colectivo seleccionado, datos de transporte, carga y datos de líneas seleccionadas
  const [selectedLinea, setSelectedLinea] = useState('');
  const [selectedRecorrido, setSelectedRecorrido] = useState('');
  const [selectedDestino, setSelectedDestino] = useState('');
  const [selectedAgencia, setSelectedAgencia] = useState('');
  const [transportData, setTransportData] = useState(null);
  const [loadingTransport, setLoadingTransport] = useState(true);
  const [selectedLineasData, setSelectedLineasData] = useState([]);

  // Función para obtener datos de transporte desde la API
  const fetchTransportData = (linea, recorrido, destino, agencia) => {
    let apiUrl =
      'https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?%20&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6';

    if (linea) {
      apiUrl += `&route_short_name=${linea}`;
    }

    fetch(apiUrl)
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

  // Efect para obtener datos de transporte al montar el componente y establecer un intervalo de actualización
  useEffect(() => {
    fetchTransportData();
    const intervalId = setInterval(fetchTransportData, 31000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Efect para obtener datos de transporte al seleccionar una línea de colectivo
  useEffect(() => {
    fetchTransportData(selectedLinea, selectedRecorrido, selectedDestino, selectedAgencia);
  }, [selectedLinea, selectedRecorrido, selectedDestino, selectedAgencia]);

  // Efect para filtrar y actualizar los datos de líneas seleccionadas
  useEffect(() => {
    if (selectedLinea && transportData) {
      const selectedData = transportData.filter((linea) => {
        // Filtrar por número, recorrido, destino y agencia
        return (
          linea.route_short_name === selectedLinea &&
          (!selectedRecorrido || linea.recorrido === selectedRecorrido) &&
          (!selectedDestino || linea.trip_headsign === selectedDestino) &&
          (!selectedAgencia || linea.agency_name === selectedAgencia)
        );
      });
      setSelectedLineasData(selectedData);
    }
  }, [transportData, selectedLinea, selectedRecorrido, selectedDestino, selectedAgencia]);

  // Define la posición inicial y la posición de la ciudad
  const position = [-34.603851, -58.381775];
  const cityPosition = position;

  // Renderiza el componente
  if (loadingTransport) {
    return <h1>Cargando datos de tránsito</h1>;
  }

  const lineasOptions = lineasFiltradas.map((linea) => ({ value: linea, label: linea }));

  return (
    <div className="transporte-container">
      <h4 className="ciudad-transporte">Transporte en Ciudad de Buenos Aires</h4>

      
      <div className="linea-colectivo-dropdown">
        <label htmlFor="lineaColectivo">Seleccionar línea de colectivo: </label>
        <Select
          id="lineaColectivo"
          options={lineasOptions}
          onChange={(selectedOption) => setSelectedLinea(selectedOption.value)}
          isMulti={false}
          placeholder="Seleccionar"
        />
      </div>

      <div className="linea-colectivo-dropdown">
        <label htmlFor="recorrido">Seleccionar recorrido: </label>
        <Select
          id="recorrido"
          options={lineasOptions}
          onChange={(selectedOption) => setSelectedRecorrido(selectedOption.value)}
          isMulti={false}
          value={selectedRecorrido ? { value: selectedRecorrido, label: selectedRecorrido } : null}
        />
      </div>

      <div className="linea-colectivo-dropdown">
        <label htmlFor="destino">Seleccionar destino: </label>
        <Select
          id="destino"
          options={lineasOptions}
          onChange={(selectedOption) => setSelectedDestino(selectedOption.value)}
          isMulti={false}
          value={selectedDestino ? { value: selectedDestino, label: selectedDestino } : null}
        />
      </div>

      <div className="linea-colectivo-dropdown">
        <label htmlFor="agencia">Seleccionar agencia: </label>
        <Select
          id="agencia"
          options={lineasOptions}
          onChange={(selectedOption) => setSelectedAgencia(selectedOption.value)}
          isMulti={false}
          value={selectedAgencia ? { value: selectedAgencia, label: selectedAgencia } : null}
        />
      </div>

   
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={cityPosition}>
          <Popup>Ciudad de Buenos Aires.</Popup>
        </Marker>

       
        {selectedLinea &&
          selectedLineasData.map((linea, index) => (
            <Marker
              key={index}
              position={[linea.latitude, linea.longitude]}
              icon={
                new L.Icon({
                  iconRetinaUrl: LineasImagenes[linea.route_short_name],
                  iconUrl: LineasImagenes[linea.route_short_name],
                  popupAnchor: [-0, -0],
                  iconSize: [32, 45],
                })
              }
            >
              <Popup>
                <p>Línea: {linea.route_short_name}</p>
                <p>Destino: {linea.trip_headsign}</p>
                <p>Agencia: {linea.agency_name}</p>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default TransporteApi;*/






// Importa las bibliotecas y componentes necesarios de React y react-leaflet
import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import LineaColectivoDropdown from './LineaColectivoDropdown';
import LineasImagenes from './LineasImagenes';

// Define las líneas de colectivo filtradas
const lineasFiltradas = ['5A', '7B', '19A', '24A', '29A', '92A', '109A', '124A', '132A', '148A'];


// Define el componente principal
const TransporteApi = () => {
  // Define estados para el colectivo seleccionado, datos de transporte, carga y datos de líneas seleccionadas
  const [selectedLinea, setSelectedLinea] = useState('');
  const [transportData, setTransportData] = useState(null);
  const [loadingTransport, setLoadingTransport] = useState(true);
  const [selectedLineasData, setSelectedLineasData] = useState([]);

  // Función para obtener datos de transporte desde la API
  const fetchTransportData = (linea) => {
    let apiUrl =
      'https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?%20&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6';

  

    fetch(apiUrl)
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

  // Efect para obtener datos de transporte al montar el componente y establecer un intervalo de actualización
  useEffect(() => {
    fetchTransportData();
    const intervalId = setInterval(fetchTransportData, 31000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Efect para obtener datos de transporte al seleccionar una línea de colectivo
  useEffect(() => {
    fetchTransportData(selectedLinea);
  }, [selectedLinea]);

  // Efect para filtrar y actualizar los datos de líneas seleccionadas
  useEffect(() => {
    if (selectedLinea && transportData) {
      const selectedData = transportData.filter((linea) => linea.route_short_name === selectedLinea);
      setSelectedLineasData(selectedData);
    }
  }, [transportData, selectedLinea]);

  // Define la posición inicial y la posición de la ciudad
  const position = [-34.603851, -58.381775];
  const cityPosition = position;

  // Renderiza el componente
  if (loadingTransport) {
    return <h1>Cargando datos de tránsito</h1>;
  }

  return (
    <div className="transporte-container">
      <h4 className="ciudad-transporte">Transporte en Ciudad de Buenos Aires</h4>

     
      <LineaColectivoDropdown
        lineas={lineasFiltradas}
        onSelectLinea={setSelectedLinea}
        lineasFiltradas={lineasFiltradas}
      />

      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={cityPosition}>
          <Popup>Ciudad de Buenos Aires.</Popup>
        </Marker>

        {selectedLinea &&
          selectedLineasData.map((linea, index) => (
            <Marker
              key={index}
              position={[linea.latitude, linea.longitude]}
              icon={
                new L.Icon({
                  iconRetinaUrl: LineasImagenes[linea.route_short_name],
                  iconUrl: LineasImagenes[linea.route_short_name],
                  popupAnchor: [-0, -0],
                  iconSize: [32, 45],
                })
              }
            >
              <Popup>
                <p>Línea: {linea.route_short_name}</p>
                <p>Destino: {linea.trip_headsign}</p>
                <p>Agencia: {linea.agency_name}</p>
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
import L from 'leaflet';
import LineaColectivoDropdown from './LineaColectivoDropdown';
import LineasImagenes from './LineasImagenes';

// Define las líneas de colectivo filtradas
const lineasFiltradas = ['5A', '7B', '19A', '24A', '29A', '92A', '109A', '124A', '132A', '148A'];

// Define el componente principal
const TransporteApi = () => {
  // Define estados para el colectivo seleccionado, datos de transporte, carga y datos de líneas seleccionadas
  const [selectedLinea, setSelectedLinea] = useState('');
  const [selectedRecorrido, setSelectedRecorrido] = useState('');
  const [selectedDestino, setSelectedDestino] = useState('');
  const [selectedAgencia, setSelectedAgencia] = useState('');
  const [transportData, setTransportData] = useState(null);
  const [loadingTransport, setLoadingTransport] = useState(true);
  const [selectedLineasData, setSelectedLineasData] = useState([]);

  // Función para obtener datos de transporte desde la API
  const fetchTransportData = (linea, recorrido, destino, agencia) => {
    let apiUrl =
      'https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?%20&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6';

    if (linea) {
      apiUrl += `&route_short_name=${linea}`;
    }

    fetch(apiUrl)
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

  // Efect para obtener datos de transporte al montar el componente y establecer un intervalo de actualización
  useEffect(() => {
    fetchTransportData();
    const intervalId = setInterval(fetchTransportData, 31000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Efect para obtener datos de transporte al seleccionar una línea de colectivo
  useEffect(() => {
    fetchTransportData(selectedLinea, selectedRecorrido, selectedDestino, selectedAgencia);
  }, [selectedLinea, selectedRecorrido, selectedDestino, selectedAgencia]);

  // Efect para filtrar y actualizar los datos de líneas seleccionadas
  useEffect(() => {
    if (selectedLinea && transportData) {
      const selectedData = transportData.filter((linea) => {
        // Filtrar por número, recorrido, destino y agencia
        return (
          linea.route_short_name === selectedLinea &&
          (!selectedRecorrido || linea.recorrido === selectedRecorrido) &&
          (!selectedDestino || linea.trip_headsign === selectedDestino) &&
          (!selectedAgencia || linea.agency_name === selectedAgencia)
        );
      });
      setSelectedLineasData(selectedData);
    }
  }, [transportData, selectedLinea, selectedRecorrido, selectedDestino, selectedAgencia]);

  // Define la posición inicial y la posición de la ciudad
  const position = [-34.603851, -58.381775];
  const cityPosition = position;

  // Renderiza el componente
  if (loadingTransport) {
    return <h1>Cargando datos de tránsito</h1>;
  }

  return (
    <div className="transporte-container">
      <h4 className="ciudad-transporte">Transporte en Ciudad de Buenos Aires</h4>

    
      <LineaColectivoDropdown
        lineas={lineasFiltradas}
        onSelectLinea={setSelectedLinea}
        onSelectRecorrido={setSelectedRecorrido}
        onSelectDestino={setSelectedDestino}
        onSelectAgencia={setSelectedAgencia}
      />

     
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={cityPosition}>
          <Popup>Ciudad de Buenos Aires.</Popup>
        </Marker>

   
        {selectedLinea &&
          selectedLineasData.map((linea, index) => (
            <Marker
              key={index}
              position={[linea.latitude, linea.longitude]}
              icon={
                new L.Icon({
                  iconRetinaUrl: LineasImagenes[linea.route_short_name],
                  iconUrl: LineasImagenes[linea.route_short_name],
                  popupAnchor: [-0, -0],
                  iconSize: [32, 45],
                })
              }
            >
              <Popup>
                <p>Línea: {linea.route_short_name}</p>
                <p>Destino: {linea.trip_headsign}</p>
                <p>Agencia: {linea.agency_name}</p>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default TransporteApi;*/
