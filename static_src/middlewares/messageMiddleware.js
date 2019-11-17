import { SEND_MESSAGE, sendMessage } from "../actions/messageActions";

export default store => next => (action) => {
		switch (action.type) {
				case SEND_MESSAGE: {
						if (action.sender !== 'bot') {
								const messageId = Object.keys(store.getState().messageReducer.msg).length +1;
								setTimeout(() => store.dispatch(
										sendMessage(messageId+1,
												'Робот',
												'bot', action.chatId)), 1000);
						}
				}
		}
		return next(action)
}