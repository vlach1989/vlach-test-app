import React from "react";
import ReactDOM from "react-dom";

import './style.scss';

import App from "./App";

function renderApp() {
	const rootNode = document.getElementById('root');
	ReactDOM.render(<App />, rootNode);
}

renderApp();