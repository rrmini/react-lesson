import React from 'react'
import PropTypes from 'prop-types'



export default class Header extends React.Component {
		static propTypes = {
				chatId: PropTypes.number,
		};

		static defaultProps = {
				chatId: 1,
		};

		render() {
				return <h1 className="header">Chat { this.props.chatId } </h1>
		}
}