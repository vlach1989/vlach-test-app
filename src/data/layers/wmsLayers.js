export default {
    cuzkOrtofoto: {
        key: 'cuzkOrtofoto',
        name: 'CUZK Ortofoto',
        type: 'wms',
        options: {
            url: 'http://geoportal.cuzk.cz/WMS_ORTOFOTO_PUB/WMService.aspx?',
            params: {
                layers: 'GR_ORTFOTORGB'
            }
        }
    }
};
