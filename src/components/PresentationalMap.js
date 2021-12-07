import React from "react";
import {ReactLeafletMap} from "@gisatcz/ptr-maps";

const PresentationalMap = ({view, backgroundLayer, layers}) => {
    return (
        <div className="vta-MapWrapper">
            <ReactLeafletMap
                mapKey='react-leaflet-map'
                view={view}
                backgroundLayer={backgroundLayer}
                layers={layers}
            />
        </div>
    );
}

export default PresentationalMap;