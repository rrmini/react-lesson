import update, { extend }  from 'immutability-helper';
import { SEND_MESSAGE, SUCCESS_MESSAGES_LOADING } from "../actions/messageActions";
import { ADD_CHAT } from "../actions/chatActions";
import {REMOVE_CHAT} from "../actions/removeChatAction";
import { RESET_CHAT } from "../actions/resetChatAction";

const initialStore = {
		chats: {
				1: {title: 'Chat 1', messageList: [], hasNews: false},
				2: {title: 'Chat 2', messageList: [], hasNews: false},
				3: {title: 'Chat 3', messageList: [], hasNews: false},
		},
};

export default function chatReducer(store = initialStore, action) {
		switch (action.type) {
				case SEND_MESSAGE: {

						return update(store, {chats: { [action.chatId]: {
								messageList: {$push: [action.messageId]},
								hasNews: { $set: action.sender === 'AngryBot' },
						} }});
				}
				case SUCCESS_MESSAGES_LOADING: {
						const chats = {...store.chats};
						action.payload.forEach(msg => {
								const { id, chatId } = msg;
								chats[chatId].messageList.push(id);
						});
						return update(store, {
								chats: { $set: chats },
								isLoading: { $set: false },
						});
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
				case REMOVE_CHAT: {
						const chatId = action.chatId;

						update.extend('$unset', function (keyToRemove, original) {
								let copy = Object.assign({}, original);
								delete copy[keyToRemove];
								return copy
						});

						return update(store, {chats: {$unset: [chatId]} } );
				}
				default:
						return store;
		}
}