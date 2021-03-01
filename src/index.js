import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function renderApp() {
	const rootEl = document.getElementById('root');
	const render = ReactDOM.render;
	render(<App/>, rootEl);
}

renderApp();