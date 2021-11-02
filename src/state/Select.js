import {createSelector} from 'reselect';
import {find as _find, forEach as _forEach, isEmpty as _isEmpty} from 'lodash';
import {Select as CommonSelect, commonSelectors} from '@gisatcz/ptr-state';

// data
import backgroundLayers from '../data/layers/backgroundLayers';
import wmsLayers from '../data/layers/wmsLayers';

const getAvailableBackgroundLayers = () => backgroundLayers;
const getAvailableWmsLayers = () => wmsLayers;

export default {
	...CommonSelect,
};
