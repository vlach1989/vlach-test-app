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
    }
};
