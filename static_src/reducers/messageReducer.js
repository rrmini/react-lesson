import update from 'react-addons-update';
import { SEND_MESSAGE } from "../actions/messageActions";

const initialStore = {};

export default function messageReducer(store = initialStore, action) {
		switch (action.type) {
				// case SEND_MESSAGE: {
				//
				// 		const messageId = Object.keys(store.msg).length + 1;
				// 		console.log(store.chats);
				// 		return update(
				// 				store, {
				// 						msg:{ $merge: {[messageId]: {from: action.sender, text: action.text}}},
				// 				}
				// 		);
				// }
				default:
						return store;
		}
}