import React from "react";
import {ReactLeafletMap, PresentationMap, MapControls, MapScale} from "@gisatcz/ptr-maps";
import {connects} from "@gisatcz/ptr-state";

const Map = connects.Map(PresentationMap);

const ControlledMap = ({stateMapKey}) => {
    return (
        <div className="vta-MapWrapper">
            <Map mapComponent={ReactLeafletMap} stateMapKey={stateMapKey}>
                <MapControls levelsBased zoomOnly/>
                <MapScale maxWidth={150} />
            </Map>
        </div>
    );
}

export default ControlledMap;