export const DEL_CHAT = '@@chat/DEL_CHAT';

export const deleteChat = (chatId) => ({
		type: DEL_CHAT,
		chatId,
});