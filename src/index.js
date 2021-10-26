import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function renderApp() {
	const rootNode = document.getElementById('root');
	ReactDOM.render(<App />, rootNode);
}

renderApp();