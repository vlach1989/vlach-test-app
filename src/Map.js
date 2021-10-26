import React from "react";
import {ReactLeafletMap} from "@gisatcz/ptr-maps";

const Map = () => {
    return (
        <div className="vta-MapWrapper">
            <ReactLeafletMap
                mapKey='react-leaflet-map'
                view={{
                    center: {lat: 50, lon: 15},
                    boxRange: 400000
                }}
                backgroundLayer={{
                    key: 'background-osm',
                    type: 'wmts',
                    options: {
                        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    }
                }}
            />
        </div>
    );
}

export default Map;