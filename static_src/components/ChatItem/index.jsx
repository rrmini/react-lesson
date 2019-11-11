import React from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'
import { push } from 'connected-react-router'

//import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class ChatItem extends React.Component {

		static propTypes = {
				chatId: PropTypes.string.isRequired,
				chatName: PropTypes.string.isRequired,
				push: PropTypes.func.isRequired,
		};

		handleNavigate = (link) => {
				this.props.push(link);
		};

		render() {
				return (
						<ListItem button
											onClick={() => this.handleNavigate(`/chat/${this.props.chatId}`)}>
										<ListItemText primary={ this.props.chatName } />
						</ListItem>
				)
		}
}


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({  push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatItem);