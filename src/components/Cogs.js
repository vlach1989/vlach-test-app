import React from "react";
import {ReactLeafletMap, PresentationMap, MapControls, MapScale, DeckGlMap} from "@gisatcz/ptr-maps";
import backgroundLayers from "../data/layers/backgroundLayers";
import cogLayers from "../data/layers/cogLayers";

const layers = [cogLayers.france];
const view = {
    center: {lat: 47, lon: 0},
    boxRange: 400000
};

const Cogs = (props) => {
    return (
        <div className="vta-MapWrapper">
            <PresentationMap
                mapComponent={ReactLeafletMap}
                backgroundLayer={backgroundLayers.cartoGrey}
                layers={layers}
                view={view}
            >
                <MapControls levelsBased zoomOnly/>
                <MapScale maxWidth={150} />
            </PresentationMap>
        </div>
    );
}

export default Cogs;