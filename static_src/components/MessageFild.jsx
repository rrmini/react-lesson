import React from 'react'
import Message from './Message.jsx'
import PropTypes from 'prop-types'
import '../css/styles.css'
import { Input, Button } from '@material-ui/core';
import States from './States'

export default class MessageFild extends React.Component {
		constructor(props){
				super(props);
				this.textInput = React.createRef();
		}
		static propTypes = {
				chatId: PropTypes.number.isRequired,
				chats: PropTypes.array.isRequired,
				onClick: PropTypes.func.isRequired,
				handleChange: PropTypes.func.isRequired,
				msg: PropTypes.array.isRequired,
				input: PropTypes.string.isRequired,
				handleKeyUp: PropTypes.func.isRequired,
		};

		componentDidMount () {
				this.textInput.current.focus;
		}

		render() {
				const { msg, chatId, chats } = this.props;

				const msgElements = chats[chatId-1].map( messageId =>
						<Message
						key={(new Date().getTime()) * Math.random()}
						from={ msg[messageId - 1].from }
						text={msg[messageId - 1].text}
						/>);

				return(
								<div className="_layout">
										<States/>
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
										       value={ this.props.input }
										       onChange={ this.props.handleChange }
										       onKeyUp={(event) => this.props.handleKeyUp }
										/>


										<Button className="message-sender"
										        onClick = { () => {this.props.onClick()} }>
												Send message
										</Button>
								</div>
				)
		}
}