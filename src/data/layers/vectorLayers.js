import {Icon} from '@gisatcz/ptr-atoms';

import points from './features/points_cz_50.json';
import polygons from './features/polygons_nuts_2.json';
import points_letna from './features/points_letna.json';

// Shapes & icons
export const iconResources = {
    icons: {
        gisat: {
            component: Icon,
            componentProps: {icon: 'gisat'},
            anchorPoint: [0.5, 0.5],
        },
        monitoring: {
            component: Icon,
            componentProps: {icon: 'monitoring'},
            anchorPoint: [0.5, 1],
        },
        crop: {
            component: Icon,
            componentProps: {icon: 'crop'},
            anchorPoint: [0, 1],
        },
        cross: {
            component: Icon,
            componentProps: {icon: 'cross'},
            anchorPoint: [0.5, 0.5],
        },
    },
};

const shapeStyle = {
    rules: [
        {
            styles: [
                {
                    attributeKey: 'type',
                    attributeValues: {
                        metro: {
                            fill: '#efefef',
                            shape: 'pin',
                            size: 32,
                            outlineWidth: 2,
                        },
                        tram: {
                            fill: '#992f2f',
                            icon: 'monitoring',
                            size: 32,
                        },
                        vegtral: {
                            fill: '#724e25',
                            icon: 'crop',
                            size: 32,
                        },
                        parking: {
                            shape: 'cross',
                            size: 32,
                            outlineWidth: 4,
                            outlineColor: '#27b0c4',
                        },
                        ntm: {
                            shape: 'square',
                            size: 32,
                            outlineWidth: 2,
                            outlineColor: '#4d8c6e',
                            fill: '#89d6ae',
                        },
                        gisat: {
                            size: 96,
                            shape: 'pin',
                            outlineWidth: 3,
                            outlineColor: '#395fab',
                            fill: '#efefef',
                            iconFill: '#122f64',
                            icon: 'gisat',
                        },
                    },
                },
                {
                    attributeKey: 'line',
                    attributeValues: {
                        A: {
                            outlineColor: '#2d9b2d',
                        },
                        C: {
                            outlineColor: '#ff0000',
                        },
                    },
                },
            ],
        },
    ],
};

export default {
    nuts2: {
        key: 'nuts2',
        type: "vector",
        options: {
            features: polygons,
            fidColumnName: "id",
            // renderingTechnique: "canvas",
            hoverable: true,
            hovered: {
                style: 'default',
            },
            selectable: true,
            selected: {
                test: {},
            },
        }
    },
    pointsCz50: {
        key: 'pointsCz50',
        type: "vector",
        options: {
            features: points,
            fidColumnName: "gid",
            // renderingTechnique: "canvas",
            pointAsMarker: true,
            style: {
                rules: [
                    {
                        styles: [
                            {
                                outlineColor: '#000000',
                                outlineWidth: 1,
                                fill: '#ffffff',
                            },
                            {
                                attributeKey: 'attr1',
                                attributeScale: {
                                    size: {
                                        inputInterval: [0, 100],
                                        outputInterval: [1, 20],
                                    },
                                },
                            },
                        ],
                    },
                ],
            }
        }
    },
    pointsLetna: {
        key: 'pointsLetna',
        type: "vector",
        options: {
            features: points_letna,
            fidColumnName: "id",
            pointAsMarker: true,
            style: shapeStyle,
            selectable: true,
            selected: {
                test: {},
            },
        }
    }
};
