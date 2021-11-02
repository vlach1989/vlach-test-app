import React from 'react';
import Helmet from 'react-helmet';
import Favicon from 'react-favicon';

import {connects} from '@gisatcz/ptr-state';
import Action from './state/Action';

// base styles need to be imported before all components
import '@gisatcz/ptr-core/lib/styles/reset.css';
import '@gisatcz/ptr-core/lib/styles/base.scss';
import './style.scss';

import {AppContainer} from '@gisatcz/ptr-components';

import {create as createRouter} from '@gisatcz/ptr-router';
import {init as initCore} from './core';
import App from './components/App';

import view from './data/view';

const path = process.env.PUBLIC_URL;

function createRoutes(Store) {
	return {
		'': {
			name: 'homepage',
			handler: function (request) {},
		},
	};
}

function init(Store, {absPath, isPreloaded, currentUrl, navHandler}) {
	/**
	 * Creates router instance that can be used to manipulat urls.
	 *
	 * App handler updates store with current page and it's up to views to react to the change.
	 * In case of url change, redux selector possibly retrieves different data and passes them
	 * into some the component.
	 *
	 */

	const router = createRouter({
		rootUrl: absPath,
		currentUrl,
		routes: createRoutes(Store),
		navHandler,
	});

	initCore({router});

	if (isPreloaded) {
		return;
	}

	Store.dispatch(Action.app.setKey('vlachTestApp'));
	Store.dispatch(Action.app.setBaseUrl(path));

	/* Intit insar app */
	Store.dispatch(Action.vlachTestApp.initApp(view));
}

const ConnectedAppContainer = connects.AppContainer(AppContainer);

const AppComponent = () => {
	return (
		<>
			<Helmet defaultTitle="--- Test ---" />
			<ConnectedAppContainer appKey="vta" dark>
				<App />
			</ConnectedAppContainer>
		</>
	);
};

export {AppComponent as App, init};
