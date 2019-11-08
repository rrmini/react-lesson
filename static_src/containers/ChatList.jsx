import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'
import List from '@material-ui/core/List'
import { Input, Button } from '@material-ui/core'
import ChatItem from '../components/ChatItem'
import { addChat } from "../actions/chatActions"
import AddIcon from '@material-ui/icons/Add';


class ChatList extends React.Component {
		static propTypes = {
				chats: PropTypes.object.isRequired,
				addChat: PropTypes.func.isRequired,
		};

		state = {
				input: '',
		};

		handleChange = (event) => {
				this.setState({ [event.target.name]: event.target.value });
		};

		handleKeyUp = (event) => {
				if (event.keyCode === 13) { // Enter
						this.handleAddChat();
				}
		};

		handleAddChat = () => {
				if (this.state.input.length > 0) {
						this.props.addChat(this.state.input);
						this.setState({ input: '' });
				}
		};

		render () {
				const { chats } = this.props;

				const chatItems = Object.keys(chats).map( chatId => <ChatItem
						key={(new Date().getTime()) * Math.random()}
						chatId={chatId}
						chatName= { chats[chatId].title }
				/>);

				return(
						<div>
								<List component="nav" aria-label="main mailbox folders">
										{ chatItems }
								</List>
								<Input
										type="text"
										name='input'
										style={ { fontSize: '22px',
												padding: '10px', } }
										placeholder='Enter chat name'
										value={ this.state.input }
										onChange={ this.handleChange }
										onKeyUp={this.handleKeyUp }
								/>
								<Button className="message-sender"
								        endIcon={<AddIcon/>}
								        onClick={() => this.handleAddChat()}>
											add chat
								</Button>
						</div>
				)
		}
}

const mapStateToProps = ({ chatReducer }) => ({
		chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);