import { RSAA, getJSON } from 'redux-api-middleware'

export const LOGIN_CHAT = '@@chat/LOGIN_CHAT';

export const addProfile = (title) => ({
		type: LOGIN_CHAT,
		title,
});

export const START_PROFILE_LOADING = '@@profile/START_PROFILE_LOADING';
export const SUCCESS_PROFILE_LOADING = '@@profile/SUCCESS_PROFILE_LOADING';
export const ERROR_PROFILE_LOADING = '@@profile/ERROR_PROFILE_LOADING';

export const loadProfile = () => ({
		[RSAA]: {
				endpoint: '/api/user.json',
				method: 'GET',
				types: [
						START_PROFILE_LOADING,
						{
								type: SUCCESS_PROFILE_LOADING,
								payload: (action, state, res) => getJSON(res).then(
										json => json,
								),
						},
						ERROR_PROFILE_LOADING,
				],
		}
});