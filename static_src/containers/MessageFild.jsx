import React from 'react'
import Dialog from '../components/Dialog'
import Message from '../components/Message'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import '../css/styles.css'
import { Input, Button } from '@material-ui/core';
import { sendMessage, loadMessages } from '../actions/messageActions'
import SendIcon from '@material-ui/icons/Send';
import CircularProgress from '@material-ui/core/CircularProgress';

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
				chatId: PropTypes.number,
				chats: PropTypes.object.isRequired,
				msg: PropTypes.object.isRequired,
				sendMessage: PropTypes.func.isRequired,
				isLoading: PropTypes.bool.isRequired,
		};

		state = {
				input : '',
				openDialog: false,
		};

		componentDidMount () {
				//this.textInput.current.focus;
				// fetch('/api/messages.json')
				// 		.then(body => body.json())
				// 		.then(json => {
				// 				json.forEach(msg =>{
				// 						this.props.sendMessage(msg.id, msg.text, msg.sender, msg.chatId);
				// 				})
				// 		})

				this.props.loadMessages();
		}

		componentDidUpdate (prevProps, _prevState){

						// document.getElementById('messageField').scrollTop = 9999;
				}

		handleSendMessage = (sender, message) => {

				if (this.props.chatId === undefined) {
						this.setState({openDialog: true});
						return;
				}

				if (this.state.input.length > 0 || sender === 'AngryBot') {
						const messageId = Object.keys(this.props.msg).length +1;
						// console.log('handleSendMessage this.props.chatId ' + this.props.chatId);
						this.props.sendMessage(messageId, message,  sender, this.props.chatId);
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

		closeDialog  = () => {
				this.setState({ openDialog: false,})
		};

		render() {
				if (this.props.isLoading) {
						return <CircularProgress />
				}

				const { msg, chatId, chats } = this.props;

				let msgElements = '';

				if (chatId !== undefined) { msgElements = chats[chatId].messageList.map( messageId =>(
						<Message
								key={(new Date().getTime()) * Math.random()}
								from={ msg[messageId].from }
								text={ msg[messageId].text}
						/>));
				}

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
										        variant={"contained"}
										        endIcon={<SendIcon/>}
										        onClick = { () => this.handleSendMessage('me', this.state.input) }>
												Send message
										</Button>

										<Dialog title={' Warning '}
										        content={ ' select chat ' }
										        open={this.state.openDialog}
										        handleClose={this.closeDialog} />
								</div>
				)
		}
}

const mapStateToProps = ({ chatReducer, messageReducer }) => ({
		chats: chatReducer.chats,
		msg: messageReducer.msg,
		isLoading: messageReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);