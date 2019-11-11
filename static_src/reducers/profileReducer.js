import update from 'react-addons-update';
import { SEND_MESSAGE } from "../actions/messageActions";
import { ADD_CHAT } from "../actions/chatActions";

const initStore = {
		userName: 'Peter Hart',
		email: 'example@gmail.com',
};

export default function profileReducer(store = initStore, action) {
		switch (action.type) {}
		return store;
}