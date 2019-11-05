import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { Link } from 'react-router-dom'

class Header extends React.Component {
		static propTypes = {
				chatId:     PropTypes.number.isRequired,
				userName:   PropTypes.string.isRequired,
		};

		static defaultProps = {
				chatId: 1,
		};

		render() {
				return (
						<div>
								<h1 className="header">Chat { this.props.chatId } </h1>
								<p style={{textAlign : 'end'}}>Signed in as {this.props.userName}</p>
								<p style={{textAlign : 'end'}}><Link to="/profile">profile</Link></p>
						</div>)
		}
}

const mapStateToProps = ({ profileReducer }) => ({
		userName: profileReducer.userName,
		// email: profileReducer.email,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);