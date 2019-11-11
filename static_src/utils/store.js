import { createStore, applyMiddleware, compose } from 'redux';
import initReducers from './../reducers';
import middlewares from '../middlewares';

function initStore() {
		const initialStore = {};

		return createStore(
				initReducers,
				initialStore,
				// window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
				compose (
				applyMiddleware(...middlewares),
						window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
				),
		);
}

export default initStore;