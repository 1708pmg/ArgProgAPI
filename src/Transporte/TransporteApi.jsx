// Importa las bibliotecas y componentes necesarios de React y react-leaflet
import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import LineaColectivoDropdown from './LineaColectivoDropdown';
import LineasImagenes from './LineasImagenes';

// Define las líneas de colectivo filtradas
const lineasFiltradas = ['5A', '7B', '19A', '24A', '29A', '92A', '109A', '124A', '132A', '148A'];
/*const lineasFiltradas = ['5', '7', '19', '24', '29', '92', '109', '124', '132', '168'];*/

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

    /*if (linea) {
      apiUrl += `&route_short_name=${linea}`;
    }*/

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

      {/* Renderiza el componente LineaColectivoDropdown con las líneas filtradas */}
      <LineaColectivoDropdown
        lineas={lineasFiltradas}
        onSelectLinea={setSelectedLinea}
        lineasFiltradas={lineasFiltradas}
      />

      {/* Renderiza el contenedor del mapa con una capa de azulejos y un marcador para la ciudad */}
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={cityPosition}>
          <Popup>Ciudad de Buenos Aires.</Popup>
        </Marker>

        {/* Renderiza los marcadores para las líneas seleccionadas con datos de imágenes */}
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
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default TransporteApi;

