import React from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'
import { push } from 'connected-react-router'
import { removeChat } from '../../actions/removeChatAction'

//import { Link } from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


class ChatItem extends React.Component {

		static propTypes = {
				chatId: PropTypes.string.isRequired,
				chatName: PropTypes.string.isRequired,
				push: PropTypes.func.isRequired,
				hasNews: PropTypes.bool.isRequired,
				removeChat: PropTypes.func.isRequired,
		};

		static defaultProps = {
				isCall: false,
		};

		handleNavigate = (link) => {
				this.props.push(link);
				// this.props.hasNews = false;
		};

		handleRemove = (chatId) => {
				this.props.removeChat(chatId)
				// console.log('треба удалить чат ' +chatId);
		};

		render() {
				// const classes = useStyles();
				return (
						<div style={{display: 'flex'}}>
								<ListItem button
								          style={{color : this.props.hasNews ? 'red' : ''}}
													onClick={() => this.handleNavigate(`/chat/${this.props.chatId}`)}>
												<ListItemText primary={ this.props.chatName } />
								</ListItem>
								<IconButton className={''}
								            aria-label="delete"
								            onClick={() => this.handleRemove(this.props.chatId)}>
										<DeleteIcon />
								</IconButton>
						</div>
				)
		}
}


const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({  push, removeChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatItem);