import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Router from './components/Router'
// import App from './components/App.jsx'

ReactDOM.render(
		<BrowserRouter>
						<Router/>
		</BrowserRouter>
		,
		document.getElementById('root')
);