import React from 'react'
import PropTypes from "prop-types";
import { Container, Grid} from '@material-ui/core';
import Header from './Header'
import MessageFild from './MessageFild'
import ChatList from './ChatList'

const botAnswers = [
		'Отстань, я робот',
		'Кто такая Сири ???',
		'Поговорите лучше с Алисой',
		'Тебе конец, ястребиный глаз!',
];

function randomChoice(arr) {
		return arr[Math.floor(arr.length * Math.random())];
}

export default class Layout extends React.Component {
		static propTypes = {
				chatId: PropTypes.number.isRequired,
				// chats: PropTypes.array.isRequired,
		};

		static defaultProps = {
				chatId: 1,
		};

		state = {
				chats: [[1,2],[],[]],
				msg: [
						{from: 'Fred', text: 'Привет'},
						{from: 'Fred', text: 'Как дела?'},
				],
				input: '',
		};

		componentDidUpdate (_prevProps, prevState){
				let prevLength = prevState.msg.length;
				let stateLength = this.state.msg.length;

				if (prevLength < stateLength &&
						this.state.msg[stateLength -1].from !== 'AngryBot') {
						setTimeout(() => this.sendMessage('AngryBot', randomChoice(botAnswers)), 1000);
				}
				document.getElementById('messageField').scrollTop = 9999;
		}

		sendMessage = (sender, message) => {
				// console.log('sendMessage ' + sender + ' ' + message);

				const { chats, msg, input } = this.state; // копия объекта

				if( message !== '' ) { //
						chats[this.props.chatId-1] = [...chats[this.props.chatId-1], msg.length+1];
						this.setState({
								msg: [...msg,{from: sender, text: message}],
								chats : chats,
								input: '',
						});
				}

		};

		handleAddChat = () => {
				// console.log('handleAddChat');

				const {chats} = this.state;
				this.setState({
						chats : [...chats, []]
				});
		};

		handleSendMessage = (message) => {
				// console.log(message);
				this.sendMessage('My', message);
		};

		handleChange = (e) => {
				// console.log('handleChange ' + this.state.input);
				this.setState({ [e.target.name]: e.target.value});
		};

		handleKeyUp = (event, message) => {
				if (event.keyCode === 13) {
						this.sendMessage('My', message);
				}
		};

		render(){
				return(
						<Container>
								<Grid container spacing={3}>
										<Grid item xs={12}>
												<Header chatId={ this.props.chatId }/>
										</Grid>
										<Grid item xs={4}>
												<ChatList chats={this.state.chats}
												          onClick={() => this.handleAddChat()}
												/>
										</Grid>
										<Grid item xs={8}>
												<MessageFild
														chatId={ this.props.chatId}
														msg={ this.state.msg }
														chats={this.state.chats}
														onClick={() => this.handleSendMessage(this.state.input)}
														handleChange={ this.handleChange }
														input={ this.state.input}
														handleKeyUp={(event) => this.handleKeyUp(event, this.state.input)}
												 />
										</Grid>
								</Grid>
						</Container>
				)
		}
}