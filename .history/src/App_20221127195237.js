
import { Card } from '@nextui-org/react';
import { NavigationControl } from 'react-map-gl';
import './App.css';
import Mapcomp from './Map';
import FloatingCard from "./Card";


function App() {
  return (
    <div className="App">

   
<FloatingCard/>
      


    <Mapcomp 
      initialViewState={{
        longitude: -122.3868,
        latitude: 47.5667,
        zoom: 7,
      }}
    >
    </Mapcomp>

  
  
    </div>
  );
}

export default App;