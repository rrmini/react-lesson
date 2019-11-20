import update from 'immutability-helper';
import {    SEND_MESSAGE,
} from "../actions/messageActions";

import {  START_CHATS_LOADING,
					SUCCESS_CHATS_LOADING,
					ERROR_CHATS_LOADING,
} from '../actions/chatActions'

const initialStore = {
		msg: {
				// 1: {from: 'Fred', text: 'Привет'},
				// 2: {from: 'Fred', text: 'Как дела?'},
		},
};

export default function messageReducer(store = initialStore, action) {
		switch (action.type) {
				case SEND_MESSAGE: {
						return update(
								store, {
										msg:{ $merge: {[action.messageId]: {sender: action.sender, text: action.text}}},
								}
						);
				}
				// case START_MESSAGES_LOADING: {
				// 		return update( store, {
				// 				isLoading: { $set: true },
				// 		});
				// }

				case START_CHATS_LOADING: {
						return update(store, {
								isLoading: { $set: true },
						});
				}


				// case SUCCESS_MESSAGES_LOADING: {
				// 		const messages = {};
				// 		action.payload.forEach(msg => {
				// 				const { text, from } = msg;
				// 				messages[msg.id] = { text, from };
				// 		});
				// 		return update(store, {
				// 				msg: { $set: messages },
				// 				isLoading: { $set: false },
				// 		});
				// }

				case SUCCESS_CHATS_LOADING: {
						return update(store, {
								msg: { $set: action.payload.entities.messages },
						});
				}

				// case ERROR_MESSAGES_LOADING: {
				// 		return update(store, {
				// 				isLoading: { $set: false },
				// 		});
				// }

				case ERROR_CHATS_LOADING: {
						return update(store, {
								isLoading: { $set: false },
						});
				}


				default:
						return store;
		}
}