import React from "react";
import {ReactLeafletMap, PresentationMap, MapControls, MapSet, MapScale} from "@gisatcz/ptr-maps";
import {connects} from "@gisatcz/ptr-state";

const ConnectedMap = connects.Map(PresentationMap);
const ConnectedMapSet = connects.MapSet(MapSet);

const ControlledMapSet = ({stateMapSetKey}) => {
    return (
        <div className="vta-MapWrapper">
            <ConnectedMapSet
                stateMapSetKey={stateMapSetKey}
                mapComponent={ReactLeafletMap}
                connectedMapComponent={ConnectedMap}
            >
                <MapControls levelsBased zoomOnly/>
                <MapScale maxWidth={150} />
            </ConnectedMapSet>
        </div>
    );
}

export default ControlledMapSet;