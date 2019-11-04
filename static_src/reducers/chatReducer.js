import update from 'react-addons-update';
import { SEND_MESSAGE } from "../actions/messageActions";
import { ADD_CHAT } from "../actions/chatActions";

const initialStore = {
		chats: {
				1: {title: 'Chat 1', messageList: [1,2]},
				2: {title: 'Chat 2', messageList: []},
				3: {title: 'Chat 3', messageList: []},
		},
		msg: {
				1: {from: 'Fred', text: 'Привет'},
				2: {from: 'Fred', text: 'Как дела?'},
		},
};

export default function chatReducer(store = initialStore, action) {
		switch (action.type) {
				case SEND_MESSAGE: {
						const messageId = Object.keys(store.msg).length +1;
						console.log(messageId);
						return update(store, {
								msg:{ $merge: {[messageId]: {from: action.sender, text: action.text}}},
								chats:{ $merge: { [action.chatId]: {
										title: store.chats[action.chatId].title,
										messageList: [...store.chats[action.chatId].messageList,
																	messageId]
								}}},
						});
				}
				case ADD_CHAT: {
						const chatId = Object.keys(store.chats).length + 1;
						return update(store, {
								chats: { $merge: {
										[chatId]: {title: action.title, messageList: []}
								}},
						});
				}
				default:
						return store;
		}
}