import React from "react";
import {ReactLeafletMap, PresentationMap, MapControls} from "@gisatcz/ptr-maps";

const PresentationalMapWithControls = ({backgroundLayer, view}) => {
    return (
        <div className="vta-MapWrapper">
            <PresentationMap
                mapComponent={ReactLeafletMap}
                backgroundLayer={backgroundLayer}
                view={view}
            >
                <MapControls levelsBased zoomOnly/>
            </PresentationMap>
        </div>
    );
}

export default PresentationalMapWithControls;