import update from 'immutability-helper';
import {    SEND_MESSAGE,
						START_MESSAGES_LOADING,
						SUCCESS_MESSAGES_LOADING,
						ERROR_MESSAGES_LOADING,
} from "../actions/messageActions";

const initialStore = {
		msg: {
				// 1: {from: 'Fred', text: 'Привет'},
				// 2: {from: 'Fred', text: 'Как дела?'},
		},
		isLoading: false,

};

export default function messageReducer(store = initialStore, action) {
		switch (action.type) {
				case SEND_MESSAGE: {
						return update(
								store, {
										msg:{ $merge: {[action.messageId]: {from: action.sender, text: action.text}}},
								}
						);
				}
				case START_MESSAGES_LOADING: {
						return update( store, {
								isLoading: { $set: true },
						});
				}
				case SUCCESS_MESSAGES_LOADING: {
						const messages = {};
						action.payload.forEach(msg => {
								const { text, from } = msg;
								messages[msg.id] = { text, from };
						});
						return update(store, {
								msg: { $set: messages },
								isLoading: { $set: false },
						});
				}
				case ERROR_MESSAGES_LOADING: {
						return update(store, {
								isLoading: { $set: false },
						});
				}
				default:
						return store;
		}
}