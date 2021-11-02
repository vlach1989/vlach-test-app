import {
	forIn as _forIn,
	cloneDeep as _cloneDeep,
	isEqual as _isEqual,
} from 'lodash';
import {Action as CommonAction, commonActions} from '@gisatcz/ptr-state';
import ActionTypes from '../constants/ActionTypes';
import Select from './Select';

function initApp(view) {
	return (dispatch, getState) => {
		// add view
		dispatch(CommonAction.views.add(view));

		// apply view
		dispatch(CommonAction.maps.updateStateFromView(view?.data?.state?.maps));
	};
}

export default {
	...CommonAction,
	vlachTestApp: {
		initApp,
	},
};
