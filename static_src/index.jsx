import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from "react-router-dom";
import Router from './containers/Router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { PersistGate } from 'redux-persist/integration/react';

import initStore, { history } from './utils/store';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './css/theme';
// import "typeface-roboto";

const { store, persistor } = initStore();

ReactDOM.render(
		<Provider store={ store }>
				<PersistGate loading={ null } persistor={ persistor }>
						<ThemeProvider theme={theme}>
								<ConnectedRouter history={history}>
												<Router/>
								</ConnectedRouter>
						</ThemeProvider>
				</PersistGate>
		</Provider>,
		document.getElementById('root')
);