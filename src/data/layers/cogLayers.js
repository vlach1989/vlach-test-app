export default {
    cogArgentina: {
        key: 'cogArgentina',
        type: 'cog',
        opacity: 0.7,
        options: {
            url: 'https://gisat-gis.eu-central-1.linodeobjects.com/worldcereal/example/21HTC/2020_21HTC_annualcropland_classification_WorldCerealPixelLSTM.tif',
            style: {
                rules: [{
                    styles: [{
                        color: "#000000"
                    },{
                        bandIndex: 0,
                        values: {
                            0: {color: null}
                        }
                    }]
                }]
            }
        }
    },
    france: {
        key: 'france',
        type: 'cog',
        opacity: 0.7,
        options: {
            url: 'https://s3.waw2-1.cloudferro.com/swift/v1/AUTH_b33f63f311844f2fbf62c5741ff0f734/ewoc-prd/merged/AEZ_11071/2019_summer1/2019_summer1_11071_activecropland_classification.tif',
            style: {
                rules: [
                    {
                        styles: [
                            {
                                color: null,
                            },
                            {
                                bandIndex: 0,
                                values: {
                                    1: {color: '#ff6767'},
                                    2: {color: '#2ca52a'}
                                }
                            },
                        ],
                    },
                ],
            }
        }
    }
};
