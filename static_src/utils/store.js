import { createStore } from 'redux'
import initReducers from './../reducers'

function initStore() {
		const initStore = {};

		return createStore(
				initReducers,
				initStore,
				window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
		)
}

export default initStore;