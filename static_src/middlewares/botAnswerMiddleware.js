import { SEND_MESSAGE } from "../actions/messageActions";
import { resetChat} from "../actions/resetChatAction";

export default store => next => (action) => {
		switch (action.type){
				case SEND_MESSAGE: {
						if (action.sender === 'bot'){
								setTimeout(() => store.dispatch(resetChat(action.chatId)), 2000);
						}
				}
		}
		return next(action)
}