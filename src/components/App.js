import React from "react";
import PresentationalMap from "./PresentationalMap";
import PresentationalMapWithControls from "./PresentationalMapWithControls";
import PresentationalMapSet from "./PresentationalMapSet";

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
		<PresentationalMapSet view={view} backgroundLayer={backgroundLayer}/>
		<PresentationalMapWithControls view={view} backgroundLayer={backgroundLayer}/>
		<PresentationalMap view={view} backgroundLayer={backgroundLayer}/>
	</div>
);

export default App;
