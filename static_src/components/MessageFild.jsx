import React from 'react'
import Message from './Message.jsx'
import PropTypes from 'prop-types'
import '../css/styles.css'
import { Input, Button } from '@material-ui/core';

const botAnswers = [
		'Отстань, я робот',
		'Кто такая Сири ???',
		'Поговорите лучше с Алисой',
		'Тебе конец, ястребиный глаз!',
];

function randomChoice(arr) {
		return arr[Math.floor(arr.length * Math.random())];
}

export default class MessageFild extends React.Component {
		constructor(props){
				super(props);
				this.textInput = React.createRef();
		}
		static propTypes = {
				chatId: PropTypes.number.isRequired,
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

		componentDidMount () {
				this.textInput.current.focus;
		}

		sendMessage = (sender, message) => {

				const { chats, msg } = this.state; // копия объекта

				if( message !== '' ) { //
						chats[this.props.chatId-1] = [...chats[this.props.chatId-1], msg.length+1];
						this.setState({
								msg: [...msg,{from: sender, text: message}],
								chats : chats,
								input: '',
						});
				}

		};

		handleChange = (e) => {
				this.setState({ [e.target.name]: e.target.value});
		};

		handleKeyUp = (e, message) => {
				if (e.keyCode === 13) {
						this.sendMessage('My', message);
				}
		};

		handleClick = (message) => {
				this.sendMessage('My', message);
		};

		render() {

				const { msg, chats } = this.state;
				const { chatId } = this.props;

				const msgElements = chats[chatId-1].map( messageId =>
						<Message
						key={(new Date().getTime()) * Math.random()}
						from={ msg[messageId - 1].from }
						text={msg[messageId - 1].text}
						/>);

				return(
								<div className="_layout">
										<div className='message-field' id='messageField'>
												{ msgElements }
										</div>
										<Input
													 ref={ this.textInput }
													 type="text"
										       name='input'
										       style={ { fontSize: '22px',
												             padding: '10px', } }
										       placeholder='Enter your message'
										       value={ this.state.input }
										       onChange={ this.handleChange }
										       onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) } />


										<Button className="message-sender"
										        onClick = { () => this.handleClick(this.state.input) }>
												Send message
										</Button>
								</div>
				)
		}
}