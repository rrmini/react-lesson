import { SEND_MESSAGE, sendMessage } from "../actions/messageActions";

export default store => next => (action) => {
		switch (action.type) {
				case SEND_MESSAGE: {
						if (action.sender !== 'AngryBot') {
								const messageId = Object.keys(store.getState().messageReducer.msg).length +1;
								// console.log('action.messageId ' + messageId + ' ' + action.text);
								// console.log('action.sender ' + action.sender);
								setTimeout(() => store.dispatch(
										sendMessage(messageId+1,
												'Робот',
												'AngryBot', action.chatId)), 1000);
						}
				}
		}
		return next(action)
}