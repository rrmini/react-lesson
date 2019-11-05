import update from 'react-addons-update';
import { SEND_MESSAGE } from "../actions/messageActions";

const initialStore = {
		msg: {
				1: {from: 'Fred', text: 'Привет'},
				2: {from: 'Fred', text: 'Как дела?'},
		},
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
				default:
						return store;
		}
}