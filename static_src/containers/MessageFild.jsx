import React from 'react'
import Message from '../components/Message'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import '../css/styles.css'
import { Input, Button } from '@material-ui/core';
import { sendMessage } from '../actions/messageActions'

const botAnswers = [
		'Отстань, я робот',
		'Кто такая Сири ???',
		'Поговорите лучше с Алисой',
		'Тебе конец, ястребиный глаз!',
];

function randomChoice(arr) {
		return arr[Math.floor(arr.length * Math.random())];
}

class MessageField extends React.Component {
		// constructor(props){
		// 		super(props);
		// 		this.textInput = React.createRef();
		// }

		static propTypes = {
				chatId: PropTypes.number.isRequired,
				chats: PropTypes.object.isRequired,
				msg: PropTypes.object.isRequired,
				sendMessage: PropTypes.func.isRequired,
		};

		state = {
				input : '',
		};

		componentDidMount () {
				//this.textInput.current.focus;
		}

		componentDidUpdate (prevProps, _prevState){
						const { msg } = this.props;
						let prevLength = Object.keys(prevProps.msg).length;
						let stateLength = Object.keys(msg).length;

						if (prevLength < stateLength &&
								Object.values(msg)[Object.values(msg).length-1].from !== 'AngryBot') {
								setTimeout(() => this.props.sendMessage('',randomChoice(botAnswers), 'AngryBot',  this.props.chatId), 1000);
						}
						document.getElementById('messageField').scrollTop = 9999;
				}

		handleSendMessage = (sender, message) => {
				if (this.state.input.length > 0 || sender === 'AngryBot') {
						this.props.sendMessage('', message,  sender, this.props.chatId);
				}
				if (sender === 'me') {
						this.setState({ input: '' });
				}
		};

		handleChange = (event) => {
				this.setState({ [event.target.name]: event.target.value });
		};

		handleKeyUp = (event) => {
				if (event.keyCode === 13) { // Enter
						this.handleSendMessage( 'me', this.state.input);
				}
		};


		render() {
				const { msg, chatId, chats } = this.props;

				const msgElements = chats[chatId].messageList.map( messageId =>(
						<Message
								key={(new Date().getTime()) * Math.random()}
								from={ msg[messageId].from }
								text={ msg[messageId].text}
						/>));

				return(
								<div className="_layout">

										<div className='message-field' id='messageField'>
												{ msgElements }
										</div>
										<Input
													 //ref={ this.textInput }
													 type="text"
										       name='input'
										       style={ { fontSize: '22px',
												             padding: '10px', } }
										       placeholder='Enter your message'
										       value={ this.state.input }
										       onChange={ this.handleChange }
										       onKeyUp={this.handleKeyUp }
										/>


										<Button className="message-sender"
										        onClick = { () => this.handleSendMessage('me', this.state.input) }>
												Send message
										</Button>
								</div>
				)
		}
}

const mapStateToProps = ({ chatReducer, messageReducer }) => ({
		chats: chatReducer.chats,
		msg: chatReducer.msg,
});

const mapDispatchToProps = dispatch => bindActionCreators({sendMessage}, dispatch); //sendMessage()

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);