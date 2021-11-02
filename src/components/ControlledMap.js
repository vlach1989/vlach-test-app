import React from "react";
import {ReactLeafletMap, PresentationMap, MapControls} from "@gisatcz/ptr-maps";
import {connects} from "@gisatcz/ptr-state";

const Map = connects.Map(PresentationMap);

const ControlledMap = ({stateMapKey}) => {
    return (
        <div className="vta-MapWrapper">
            <Map mapComponent={ReactLeafletMap} stateMapKey={stateMapKey}>
                <MapControls levelsBased zoomOnly/>
            </Map>
        </div>
    );
}

export default ControlledMap;