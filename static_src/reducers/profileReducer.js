import update from 'react-addons-update';
import {  START_PROFILE_LOADING,
					SUCCESS_PROFILE_LOADING,
					ERROR_PROFILE_LOADING,
} from '../actions/profileActions';

const initStore = {
		userName: '', //Peter Hart
		email: '', //example@gmail.com
		isLoading: false,
};

export default function profileReducer(store = initStore, action) {
		switch (action.type) {
				case START_PROFILE_LOADING: {
						return update(store, {
								isLoading: {$set: true},
						});
				}
				case SUCCESS_PROFILE_LOADING: {
						console.log(action.payload.email);
						return update(store, {
								userName: {$set:  action.payload.name},
								email: {$set: action.payload.email},
								isLoading: { $set: false },
						});
				}
		}
		return store;
}