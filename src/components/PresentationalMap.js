import React from "react";
import {ReactLeafletMap} from "@gisatcz/ptr-maps";

const PresentationalMap = ({view, backgroundLayer}) => {
    return (
        <div className="vta-MapWrapper">
            <ReactLeafletMap
                mapKey='react-leaflet-map'
                view={view}
                backgroundLayer={backgroundLayer}
            />
        </div>
    );
}

export default PresentationalMap;