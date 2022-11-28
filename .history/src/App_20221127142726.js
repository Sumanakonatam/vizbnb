
import { NavigationControl } from 'react-map-gl';
import './App.css';
import Mapcomp from './Map';

function App() {
  return (
    <div className="App">
      <Mapcomp />
      <NavigationControl/>
    </div>
  );
}

export default App;