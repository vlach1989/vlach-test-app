import React from "react";
import {
    ReactLeafletMap,
    PresentationMap,
    MapControls,
    MapSet,
    MapSetPresentationMap,
    MapScale
} from "@gisatcz/ptr-maps";

const PresentationalMapSet = ({backgroundLayer, view}) => {
    return (
        <div className="vta-MapWrapper">
            <MapSet
                activeMapKey='map-1'
                mapComponent={ReactLeafletMap}
                view={view}
                sync={{
                    boxRange: true,
                    center: true
                }}
                backgroundLayer={backgroundLayer}
            >
                <MapSetPresentationMap mapKey='map-1'/>
                <MapSetPresentationMap mapKey='map-2'/>
                <MapSetPresentationMap mapKey='map-3'/>
                <MapControls levelsBased zoomOnly/>
                <MapScale maxWidth={150} />
            </MapSet>
        </div>
    );
}

export default PresentationalMapSet;