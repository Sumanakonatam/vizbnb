import React from 'react';
import mapboxgl from 'mapbox-gl';
import getData from 'App.js';

mapboxgl.accessToken='pk.eyJ1Ijoic2FtZWVoc3VoYWlsIiwiYSI6ImNsYXltY3YwMjEwZWwzbm44NWNrZDFuNHIifQ.TxMGHqwzrfCJ81W-H0xI5w';

/*
const data = [
	{
		"location": "West Seattle",
		"city": "Seattle",
		"state": "Washington",
		"coordinates": [-122.3868,47.5667],
	},
	{
		"location": "Central District",
		"city": "Seattle",
		"state": "Washington",
		"coordinates": [-122.2964,47.6088],
	},
	{
		"location": "Capitol hill",
		"city": "Seattle",
		"state": "Washington",
		"coordinates": [-122.3222,47.6253],
	}
] */

const MapboxCircle = require('mapbox-gl-circle');
//const [data, setData] = useState()
//const [neighborhoods, setNeighborhoods] = useState()

function dat(props) {

	let data = props.data;
	let neighborhoods = props.neighborhoods;
  }


  if (isListing == true) {
	let listings = {};
	const array = Array.from(selected)
	alert(array[0])
	for (let neighs = 0; neighs < neighborhoods.length; neighs++) {

	  const neighlat=neighborhoods[neighs]["latitude"]
	  const neighlong=neighborhoods[neighs]["longitude"]
	  axios
		.get(
		  `http://localhost:8080/listings/${neighnames}?minPrice=${price[0]}&maxPrice=${price[1]}&home=${array.includes("Entire Home") ? 'yes' : 'no'}&room=${array.includes("Private Room") ? 'yes' : 'no'}&minNights=${minNights}`
		)
		.then((res) => {
		  listings[neighnames] = res.data
		  //alert(res.data["count"])
		});
	}
  }

  else if(isListing==false)
  {
	let hosts={};

	for (let neighs = 0; neighs < neighborhoods.length; neighs++) {

	  const neighnames=neighborhoods[neighs]["neighborhood_group"]
	  axios
		.get(
		  `http://localhost:8080/hosts/${neighnames}`
		)
		.then((res) => {
		  hosts[neighnames] = res.data
		  //alert(res.data["count"])
		});
	}

	
  }



class Mapcomp extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			lng: -122.3321,
			lat: 47.6062,
			zoom: 12
		}
	}
	
	componentDidMount(){

		


		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/sameehsuhail/claymls6e004115mxig2eme72', 
            width:"900vw",
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})

		var myCircle = new MapboxCircle({lat: 47.6062, lng: -122.3321}, 2500, {
			editable: false,
			minRadius: 1500,
			fillColor: '#29AB87'
		}).addTo(map);

	}

	render(){
		return(
			<div>
				<div ref={el => this.mapContainer = el} style={{width:'100vw', height:'100vh', position:'static', zIndex:2}}/>
			</div>
		)
	}
}

export default Mapcomp;


/*
data.forEach((location) => {
			console.log(location)
			var marker = new mapboxgl.Marker()
							.setLngLat(location.coordinates)
							.setPopup(new mapboxgl.Popup({ offset: 30 })
							.setHTML('<h4>' + location.city + '</h4>' + location.location))
							.addTo(Mapcomp);

		})*/