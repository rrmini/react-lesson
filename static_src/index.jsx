import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Router from './containers/Router';
import { Provider } from 'react-redux';
import initStore from './utils/store';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './css/theme';
// import "typeface-roboto";
ReactDOM.render(
		<Provider store={ initStore() }>
				<ThemeProvider theme={theme}>
						<BrowserRouter>
										<Router/>
						</BrowserRouter>
				</ThemeProvider>
		</Provider>,
		document.getElementById('root')
);