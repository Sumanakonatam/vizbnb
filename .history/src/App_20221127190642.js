
import { Card } from '@nextui-org/react';
import { NavigationControl } from 'react-map-gl';
import './App.css';
import Mapcomp from './Map';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import NavBar from './components/navbar';


function App() {
  return (
    <div className="App">

    <Mapcomp className="map"
    initialViewState={{
      longitude: -122.3868,
      latitude: 47.5667,
      zoom: 7,
    }}
  >
    <NavigationControl/>
  </Mapcomp>
  <NavBar />
      
    </div>
  );
}

export default App;