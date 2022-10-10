import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js'
import Filters from './components/Filters.js'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'


function App() {
  const position = [51.505, -0.09]
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
