import React from 'react'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import States from './States'


export default class ChatList extends React.Component {

		handleAddChat = () => {
				let { chats, messages } = this.state;
				this.setState({
						chats : [...chats, 'newChat']
				});
				States.state.chats = [...chats, 'newChat'];
				this.setState({
						messages: {...messages,[Object.keys(messages).length + 1]: {text: 'hello', sender: 'Jhon'}}
				});
				console.log(this.state.messages);

		};

		state = {
				chats : States.state.chats,
				messages: {
						1: { text: "Привет!", sender: 'bot' },
						2: { text: "Здравствуйте!", sender: 'bot' },
				},
		};

		render () {
				return(
						<div>
						<List component="nav" aria-label="main mailbox folders">
								<ListItem button>
										<Link to="/chat/1/">
												<ListItemText primary="Cats" />
										</Link>
								</ListItem>
								<ListItem button>
										<Link to="/chat/2/">
												<ListItemText primary="Dogs" />
										</Link>
								</ListItem>
								<ListItem button>
										<Link to="/chat/3/">
												<ListItemText primary="Animals" />
										</Link>
								</ListItem>
						</List>
						<Button className="message-sender" onClick = { () => this.handleAddChat() }>
									add chat
						</Button>
						</div>
				)
		}
}