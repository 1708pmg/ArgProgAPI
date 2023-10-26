




import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import LineaColectivoDropdown from './LineaColectivoDropdown';

const lineasFiltradas = ['5A', '7B', '19A', '24A', '92A', '109A', '124A', '132A', '148A'];

const TransporteApi = () => {
  const [transportData, setTransportData] = useState(null);
  const [loadingTransport, setLoadingTransport] = useState(true);
  const [selectedLinea, setSelectedLinea] = useState('');
  const [selectedLineasData, setSelectedLineasData] = useState([]);

  const fetchTransportData = (linea) => {
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

  useEffect(() => {
    fetchTransportData();
    const intervalId = setInterval(fetchTransportData, 31000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchTransportData(selectedLinea);
  }, [selectedLinea]);

  useEffect(() => {
    if (selectedLinea) {
      const selectedData = transportData?.filter((linea) => linea.route_short_name === selectedLinea);
      setSelectedLineasData((prevData) => [...prevData, ...selectedData]);
    }
  }, [transportData, selectedLinea]);

  const position = [-34.603851, -58.381775];
  const cityPosition = position;

  const busIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1042/1042266.png',
    iconSize: [25, 25],
    iconAnchor: [12, 12],
    popupAnchor: [1, -34],
  });

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

        {selectedLineasData.map((linea) => (
          <Marker key={linea.route_id} position={[linea.latitude, linea.longitude]} icon={busIcon}>
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
import L from 'leaflet';
import LineaColectivoDropdown from './LineaColectivoDropdown';

// Líneas específicas que se quieren mostrar
const lineasFiltradas = ['5A', '7B', '124A', '132A', '92A', '24A', '99A', '109A', '168A'];

// Estados para almacenar los datos del transporte y el estado de carga
const TransporteApi = () => {
  const [transportData, setTransportData] = useState(null);
  const [loadingTransport, setLoadingTransport] = useState(true);
  const [selectedLinea, setSelectedLinea] = useState('');

  const fetchTransportData = () => {
    fetch(
      'https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?%20&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6'

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
    fetchTransportData();
    const intervalId = setInterval(fetchTransportData, 31000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchTransportData(selectedLinea);
  }, [selectedLinea]);


  // Posición inicial en el mapa
  const position = [-34.603851, -58.381775];
  let cityPosition = position;

  // Verifica si transportData es nulo antes de mapearlo
  const lineas = transportData
    ? Array.from(new Set(transportData.map((linea) => linea.route_short_name)))
    : [];

  // Icono para los marcadores de los autobuses
  const busIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1042/1042266.png',
    iconSize: [25, 25],
    iconAnchor: [12, 12],
    popupAnchor: [1, -34],
  });

  // Muestra un mensaje de carga si los datos aún se están cargando
  if (loadingTransport) {
    return <h1>Cargando datos de tránsito</h1>;
  }

  // Filtra los datos de transporte según la línea seleccionada o las líneas específicas
  const filteredTransportData = selectedLinea
    ? transportData?.filter((linea) => linea.route_short_name === selectedLinea)
    : transportData?.filter((linea) => lineasFiltradas.includes(linea.route_short_name));

  // Renderiza el componente con el mapa y los marcadores
  return (
    <div className="transporte-container">
      <h4 className="ciudad-transporte">Transporte en Ciudad de Buenos Aires</h4>

      
      <LineaColectivoDropdown
        lineas={lineas}
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

      
        {filteredTransportData &&
          filteredTransportData.map((linea) => (
            <Marker
              key={linea.route_id}
              position={[linea.latitude, linea.longitude]}
              icon={busIcon}
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

export default TransporteApi;*/




/*import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import LineaColectivoDropdown from './LineaColectivoDropdown';

const TransporteApi = () => {
  const [transportData, setTransportData] = useState(null);
  const [loadingTransport, setLoadingTransport] = useState(true);
  const [selectedLinea, setSelectedLinea] = useState('');
  const [lineasFiltradas, setLineasFiltradas] = useState([]);

  const fetchTransportData = (linea) => {
    let apiUrl = 'https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6';
    
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

  useEffect(() => {
    fetchTransportData(selectedLinea);
  }, [selectedLinea]);

  useEffect(() => {
    // Cuando cambian las líneas filtradas, se vuelve a cargar la información
    fetchTransportData(selectedLinea);
  }, [selectedLinea]);

  const position = [-34.603851, -58.381775];
  let cityPosition = position;

  const lineas = transportData ? Array.from(new Set(transportData.map((linea) => linea.route_short_name))) : [];

  const busIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1042/1042266.png',
    iconSize: [25, 25],
    iconAnchor: [12, 12],
    popupAnchor: [1, -34],
  });

  const handleLineasFiltradasChange = (lineasSeleccionadas) => {
    setLineasFiltradas(lineasSeleccionadas);
  };

  if (loadingTransport) {
    return <h1>Cargando datos de tránsito</h1>;
  }

  const filteredTransportData = transportData?.filter((linea) => lineasFiltradas.includes(linea.route_short_name));

  return (
    <div className="transporte-container">
      <h4 className="ciudad-transporte">Transporte en Ciudad de Buenos Aires</h4>

      <LineaColectivoDropdown
        lineas={lineas}
        onSelectLinea={setSelectedLinea}
        lineasFiltradas={lineasFiltradas}
        onLineasFiltradasChange={handleLineasFiltradasChange}
      />

      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={cityPosition}>
          <Popup>Ciudad de Buenos Aires.</Popup>
        </Marker>

        {filteredTransportData &&
          filteredTransportData.map((linea) => (
            <Marker
              key={linea.route_id}
              position={[linea.latitude, linea.longitude]}
              icon={busIcon}
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

export default TransporteApi;*/





/*import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import LineaColectivoDropdown from './LineaColectivoDropdown';

const lineasFiltradas = ['5A', '7B', '124A', '132', '92A', '24', '99', '109', '168'];

const TransporteApi = () => {
  const [transportData, setTransportData] = useState(null);
  const [loadingTransport, setLoadingTransport] = useState(true);
  const [selectedLinea, setSelectedLinea] = useState('');

  const fetchTransportData = () => {
    fetch(
      'https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6'
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
    fetchTransportData();
    const intervalId = setInterval(fetchTransportData, 31000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchTransportData(selectedLinea);
  }, [selectedLinea]);

  const position = [-34.603851, -58.381775];
  let cityPosition = position;

  // Filtrar las líneas según el array lineasFiltradas
  const lineas = transportData
    ? Array.from(new Set(transportData.map((linea) => linea.route_short_name))).filter((linea) =>
        lineasFiltradas.includes(linea)
      )
    : [];

  const filteredTransportData = selectedLinea
    ? transportData?.filter((linea) => linea.route_short_name === selectedLinea)
    : transportData;

  const busIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1042/1042266.png',
    iconSize: [25, 25],
    iconAnchor: [12, 12],
    popupAnchor: [1, -34],
  });

  if (loadingTransport) {
    return <h1>Cargando datos de tránsito</h1>;
  }

  return (
    <div className="transporte-container">
      <h4 className="ciudad-transporte">Transporte en Ciudad de Buenos Aires</h4>

      <LineaColectivoDropdown lineas={lineas} onSelectLinea={setSelectedLinea} />

      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={cityPosition}>
          <Popup>
            Ciudad de Buenos Aires.
          </Popup>
        </Marker>

        {filteredTransportData &&
          filteredTransportData.map((linea) => (

            <Marker
              key={linea.route_id}
              position={[linea.latitude, linea.longitude]}
              icon={busIcon}

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

export default TransporteApi;*/




/*import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import LineaColectivoDropdown from './LineaColectivoDropdown';

const TransporteApi = () => {
  const [transportData, setTransportData] = useState(null);
  const [loadingTransport, setLoadingTransport] = useState(true);
  const [selectedLinea, setSelectedLinea] = useState('');

  const fetchTransportData = () => {
    fetch(
      
      'https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6' 
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
    fetchTransportData();
    const intervalId = setInterval(fetchTransportData, 31000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    fetchTransportData(selectedLinea);
  }, [selectedLinea]);


  const position = [ -34.603851, -58.381775];
  let cityPosition = position;

  // Verificar si transportData es nulo antes de mapearlo
  const lineas = transportData ? Array.from(new Set(transportData.map((linea) => linea.route_short_name))) : [];

  const filteredTransportData = selectedLinea
    ? transportData?.filter((linea) => linea.route_short_name === selectedLinea)
    : transportData;

  const busIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1042/1042266.png',
    iconSize: [25, 25],
    iconAnchor: [12, 12],
    popupAnchor: [1, -34],
  });
  if (loadingTransport){return <h1>Cargando datos de transito</h1>} 
  return (
    <div className="transporte-container">
      <h4 className='ciudad-transporte'>Transporte en Ciudad de Buenos Aires</h4>

      <LineaColectivoDropdown lineas={lineas} onSelectLinea={setSelectedLinea} />

      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={cityPosition}>
          <Popup>
            Ciudad de Buenos Aires.
          </Popup>
        </Marker>

        {filteredTransportData &&
          filteredTransportData.map((linea) => (

            <Marker
              key={linea.route_id}
              position={[linea.latitude, linea.longitude]}
              icon={busIcon}

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

export default TransporteApi;*/


/*const TransporteApi = () => {
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
    fetchTransportData();
    const intervalId = setInterval(fetchTransportData, 31000);
    return () => clearInterval(intervalId);
  }, []);


  const position = [-34.61315, -58.37723];
  let cityPosition = position

  const lineas = Array.from(new Set(transportData.map((linea) => linea.route_short_name)));

  const filteredTransportData = selectedLinea
    ? transportData?.filter((linea) => linea.route_short_name === selectedLinea)
    : transportData;

  const busIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1042/1042266.png',
    iconSize: [25, 25],
    iconAnchor: [12, 12],
    popupAnchor: [1, -34],
  });

  if (loadingTransport){return <h1>Cargando datos de transito</h1>} 

  return (
     
    <div className="transporte-container">
      <h4 className='ciudad-transporte'>Transporte en Ciudad de Buenos Aires</h4>

      <LineaColectivoDropdown lineas={lineas} onSelectLinea={setSelectedLinea} />

      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={cityPosition}>
          <Popup>
            Ciudad de Buenos Aires.
          </Popup>
        </Marker>

        {filteredTransportData &&
          filteredTransportData.map((linea) => (

            <Marker
              key={linea.route_id}
              position={[linea.latitude, linea.longitude]}
              icon={busIcon}

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

export default TransporteApi;*/



/*import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet'; 
import LineaColectivoDropdown from './LineaColectivoDropdown';
import transportData from '../data/transportData.json';

const TransporteApi = () => {
  const [selectedLinea, setSelectedLinea] = useState('');

  const position = [-34.61315, -58.37723];
  let cityPosition = position

  // Obtener todas las lineas únicas
  const lineas = Array.from(new Set(transportData.map((linea) => linea.route_short_name)));

  const filteredTransportData = selectedLinea
    ? transportData?.filter((linea) => linea.route_short_name === selectedLinea)
    : transportData;

  useEffect(() => {
    // AGREGAR LAS LOGICA DE LA API Y AGREGAR  SERINTERVAL
  }, []);

  // Icono personalizado para el marcador
  const busIcon = new L.Icon({
    iconUrl:'https://cdn-icons-png.flaticon.com/512/1042/1042266.png',
    iconSize: [25, 25],
    iconAnchor: [12, 12],
    popupAnchor: [1, -34],
  });

  return (
    <div className="transporte-container">
      <h4 className='ciudad-transporte'>Transporte en Ciudad de Buenos Aires</h4>

      <LineaColectivoDropdown lineas={lineas} onSelectLinea={setSelectedLinea} />

      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={cityPosition}>
          <Popup>
            Ciudad de Buenos Aires.
          </Popup>
        </Marker>

        {filteredTransportData &&
          filteredTransportData.map((linea) => (

            <Marker
              key={linea.route_id}
              position={[linea.latitude, linea.longitude]}
              icon={busIcon}

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

export default TransporteApi;*/

/*import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet'; 
import LineaColectivoDropdown from './LineaColectivoDropdown';
import transportData from '../data/transportData.json';

const TransporteApi = () => {
  const [selectedLinea, setSelectedLinea] = useState('');

  const position = [-34.61315, -58.37723];
  let cityPosition = position

  // Obtener todas las lineas únicas
  const lineas = Array.from(new Set(transportData.map((linea) => linea.route_short_name)));

  const filteredTransportData = selectedLinea
    ? transportData?.filter((linea) => linea.route_short_name === selectedLinea)
    : transportData;

  useEffect(() => {
    // AGREGAR LAS LOGICA DE LA API Y AGREGAR  SERINTERVAL
  }, []);

  // Icono personalizado para el marcador
  const busIcon = new L.Icon({
    iconUrl:'https://cdn-icons-png.flaticon.com/512/1042/1042266.png',
    iconSize: [25, 25],
    iconAnchor: [12, 12],
    popupAnchor: [1, -34],
  });

  return (
    <div className="transporte-container">
      <h4 className='ciudad-transporte'>Transporte en Ciudad de Buenos Aires</h4>

      <LineaColectivoDropdown lineas={lineas} onSelectLinea={setSelectedLinea} />

      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={cityPosition}>
          <Popup>
            Ciudad de Buenos Aires.
          </Popup>
        </Marker>

        {filteredTransportData &&
          filteredTransportData.map((linea) => (

            <Marker
              key={linea.route_id}
              position={[linea.latitude, linea.longitude]}
              icon={busIcon}

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

export default TransporteApi;*/



/*import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
/*import L from 'leaflet'; 
import LineaColectivoDropdown from './LineaColectivoDropdown';
import transportData from '../data/transportData.json';

const TransporteApi = () => {
  const [selectedLinea, setSelectedLinea] = useState('');

  const position = [-34.61315, -58.37723];
  let cityPosition = position

  // Obtener todas las lineas únicas
  const lineas = Array.from(new Set(transportData.map((linea) => linea.route_short_name)));

  const filteredTransportData = selectedLinea
    ? transportData?.filter((linea) => linea.route_short_name === selectedLinea)
    : transportData;

  useEffect(() => {
    // AGREGAR LAS LOGICA DE LA API Y AGREGAR  SERINTERVAL
  }, []); 

  return (
    <div className="transporte-container">
      <h4 className='ciudad-transporte'>Transporte en Ciudad de Buenos Aires</h4>

      <LineaColectivoDropdown lineas={lineas} onSelectLinea={setSelectedLinea} />

      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={cityPosition}>
          <Popup>
            Ciudad de Buenos Aires.
          </Popup>
        </Marker>

        {filteredTransportData &&
          filteredTransportData.map((linea) => (

            <Marker
              key={linea.route_id}
              position={[linea.latitude, linea.longitude]}
              icon={{
                  iconUrl: '<a href="https://www.flaticon.es/iconos-gratis/autobus" title="autobús iconos">Autobús iconos creados por Freepik - Flaticon</a>',
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                })
              }
            >
              <Popup>
             style={{
                  backgroundColor: 'blue', // Cambia el color de fondo
                  color: 'white', // Cambia el color del texto
                }}
                <p>Línea: {linea.route_short_name}</p>
                <p>Destino: {linea.trip_headsign}</p>
              </Popup>
            </Marker>
          ))}
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
