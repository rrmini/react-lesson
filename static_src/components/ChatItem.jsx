import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class ChatItem extends React.Component {

		static propTypes = {
				chatId: PropTypes.number.isRequired,
				chatName: PropTypes.string.isRequired,
		};

		render() {
				return (
						<ListItem button>
								<Link to={'/chat/'+ this.props.chatId + '/'} >
										<ListItemText primary={ this.props.chatName } />
								</Link>
						</ListItem>
				)
		}
}