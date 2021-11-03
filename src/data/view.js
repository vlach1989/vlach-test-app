import backgroundLayers from './layers/backgroundLayers';
import wmsLayers from "./layers/wmsLayers";
import cogLayers from "./layers/cogLayers";

export default {
	key: '204188df-5c90-49d5-9f6d-83bed1c725bb',
	data: {
		state: {
			maps: {
				maps: {
					controlledMap: {
						key: 'controlledMap',
						data: {
							backgroundLayer: backgroundLayers.osm,
							layers: [cogLayers.cogArgentina],
							view: {
								center: {lat: -34, lon: -58.5},
								boxRange: 100000
							}
						}
					},
					map1: {
						key: 'map1'
					},
					map2: {
						key: 'map2'
					},
					map3: {
						key: 'map3'
					}
				},
				sets: {
					controlledMapSet: {
						key: 'controlledMapSet',
						maps: ['map1', 'map2', 'map3'],
						activeMapKey: 'map1',
						sync: {
							center: true,
							boxRange: true
						},
						data: {
							backgroundLayer: backgroundLayers.osm,
							layers: [wmsLayers.cuzkOrtofoto],
							view: {
								center: {lat: 50, lon: 15},
								boxRange: 400000
							}
						}
					}
				}
			}
		},
	},
};
