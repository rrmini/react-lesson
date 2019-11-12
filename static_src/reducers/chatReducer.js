import update from 'immutability-helper';
import { SEND_MESSAGE } from "../actions/messageActions";
import { ADD_CHAT } from "../actions/chatActions";
import {DEL_CHAT} from "../actions/deleteChatAction";
import { RESET_CHAT } from "../actions/resetChatAction";

const initialStore = {
		chats: {
				1: {title: 'Chat 1', messageList: [1,2], hasNews: false},
				2: {title: 'Chat 2', messageList: [], hasNews: false},
				3: {title: 'Chat 3', messageList: [], hasNews: false},
		},
};

export default function chatReducer(store = initialStore, action) {
		switch (action.type) {
				case SEND_MESSAGE: {
						// return update(store, {
						// 		chats:{ $merge: { [action.chatId]: {
						// 				title: store.chats[action.chatId].title,
						// 				messageList: [...store.chats[action.chatId].messageList, action.messageId],
						// 				hasNews: action.sender === 'AngryBot',
						// 				}
						// 		}},
						// });
						return update(store, {chats: { [action.chatId]: {
								messageList: {$push: [action.messageId]},
								hasNews: { $set: action.sender === 'AngryBot' },
						} }});
				}
				case ADD_CHAT: {
						const chatId = Object.keys(store.chats).length + 1;
						return update(store, {
								chats: { $merge: {
										[chatId]: { title: action.title,
																messageList: [],
																hasNews: false}
								}},
						});
				}
				case RESET_CHAT: {
						return update(store, {chats: { [action.chatId]: {
								hasNews: { $set: false }
						} } } );
				}
				case DEL_CHAT: {
						const chatId = action.chatId;
						console.log('дошли до редусера case DEL_CHAT:' + chatId);
				}
				default:
						return store;
		}
}