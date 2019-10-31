import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button'
import ChatItem from './ChatItem'


export default class ChatList extends React.Component {
		static propTypes = {
				chats: PropTypes.array.isRequired,
				onClick: PropTypes.func.isRequired,
		};


		render () {
				const { chats } = this.props;

				const chatItems = chats.map( item => <ChatItem
						key={(new Date().getTime()) * Math.random()}
						chatId={chats.indexOf(item) +1}
						chatName={'Chat ' + (chats.indexOf(item) +1)}/>);

				return(
						<div>
								<List component="nav" aria-label="main mailbox folders">
										{ chatItems }
								</List>
								<Button className="message-sender" onClick={() => this.props.onClick()}>
											add chat
								</Button>
						</div>
				)
		}
}