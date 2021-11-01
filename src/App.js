import React from "react";
import Map from "./Map";
import PresentationalMapWithControls from "./PresentationalMapWithControls";

const view = {
	center: {lat: 50, lon: 15},
	boxRange: 400000
};

const backgroundLayer = {
	key: 'background-osm',
	type: 'wmts',
	options: {
		url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
	}
};

const App = () => (
	<div className="vta-App">
		<PresentationalMapWithControls view={view} backgroundLayer={backgroundLayer}/>
		<Map view={view} backgroundLayer={backgroundLayer}/>
	</div>
);

export default App;
