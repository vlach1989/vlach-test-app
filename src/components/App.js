import React from "react";
import ControlledMap from "./ControlledMap";
import ControlledMapSet from "./ControlledMapSet";
import PresentationalMap from "./PresentationalMap";
import PresentationalMapWithControls from "./PresentationalMapWithControls";
import PresentationalMapSet from "./PresentationalMapSet";

import backgroundLayers from "../data/layers/backgroundLayers";

const view = {
	center: {lat: 50, lon: 15},
	boxRange: 400000
};

const App = () => (
	<div className="vta-App">
		<h3>Controlled map set</h3>
		<ControlledMapSet stateMapSetKey="controlledMapSet"/>
		<h3>Controlled map</h3>
		<ControlledMap stateMapKey="controlledMap"/>
		<h3>Presentational map set</h3>
		<PresentationalMapSet view={view} backgroundLayer={backgroundLayers.osm}/>
		<h3>Presentational map with controls</h3>
		<PresentationalMapWithControls view={view} backgroundLayer={backgroundLayers.osm}/>
		<h3>Presentational map</h3>
		<PresentationalMap view={view} backgroundLayer={backgroundLayers.osm}/>
	</div>
);

export default App;
