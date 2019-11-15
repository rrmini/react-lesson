export const REMOVE_CHAT = '@@chat/REMOVE_CHAT';

export const removeChat = (chatId) => ({
		type: REMOVE_CHAT,
		chatId,
});