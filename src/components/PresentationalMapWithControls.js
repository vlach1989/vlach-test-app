import React from "react";
import {ReactLeafletMap, PresentationMap, MapControls} from "@gisatcz/ptr-maps";
import {iconResources} from "../data/layers/vectorLayers";

const PresentationalMapWithControls = ({backgroundLayer, layers, view}) => {
    return (
        <div className="vta-MapWrapper">
            <PresentationMap
                mapComponent={ReactLeafletMap}
                backgroundLayer={backgroundLayer}
                layers={layers}
                view={view}
                resources={iconResources}
            >
                <MapControls levelsBased zoomOnly/>
            </PresentationMap>
        </div>
    );
}

export default PresentationalMapWithControls;