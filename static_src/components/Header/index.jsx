import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { Link } from 'react-router-dom'
import SettingsIcon from '@material-ui/icons/Settings';

class Header extends React.Component {
		static propTypes = {
				chatId:     PropTypes.number.isRequired,
				userName:   PropTypes.string.isRequired,
				chats:  PropTypes.object.isRequired,
		};

		static defaultProps = {
				chatId: 1,
		};

		render() {
				const title = this.props.chats[this.props.chatId].title;
				return (
						<div>
								<h1 className="header"> {title  } </h1>
								<p style={{textAlign : 'end'}}>Signed in as {this.props.userName}</p>

								<p style={{textAlign : 'end'}}>
										<Link to="/profile"
										><SettingsIcon color="action"/></Link>
								</p>
						</div>)
		}
}

const mapStateToProps = ({ profileReducer, chatReducer }) => ({
		userName: profileReducer.userName,
		chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);