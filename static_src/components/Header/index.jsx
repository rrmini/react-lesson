import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default class Header extends React.Component {
		static propTypes = {
				chatId: PropTypes.number.isRequired,
		};

		static defaultProps = {
				chatId: 1,
		};

		render() {
				return (
						<div>
								<h1 className="header">Chat { this.props.chatId } </h1>
								<p style={{textAlign : 'end'}}><Link to="/profile">profile</Link></p>
						</div>)
		}
}