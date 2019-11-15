export const RESET_CHAT = '@@chat/RESET_CHAT';

export const resetChat = (chatId) => ({
		type: RESET_CHAT,
		chatId,
});