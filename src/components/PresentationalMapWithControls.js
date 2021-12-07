import React from "react";
import {ReactLeafletMap, PresentationMap, MapControls, MapScale, DeckGlMap} from "@gisatcz/ptr-maps";
import {iconResources} from "../data/layers/vectorLayers";

const PresentationalMapWithControls = ({backgroundLayer, layers, view, viewLimits}) => {
    return (
        <div className="vta-MapWrapper">
            <PresentationMap
                mapComponent={ReactLeafletMap}
                backgroundLayer={backgroundLayer}
                layers={layers}
                view={view}
                viewLimits={viewLimits}
                resources={iconResources}
            >
                <MapControls levelsBased zoomOnly/>
                <MapScale maxWidth={150} />
            </PresentationMap>
        </div>
    );
}

export default PresentationalMapWithControls;