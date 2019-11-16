import { apiMiddleware } from 'redux-api-middleware';
import messageMiddleware from './messageMiddleware';
import botAnswerMiddleware from "./botAnswerMiddleware";

export default [
		apiMiddleware,
		messageMiddleware,
		botAnswerMiddleware,
]