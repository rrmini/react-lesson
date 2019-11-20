import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Child extends React.Component {

		static propTypes = {
				sender: PropTypes.string.isRequired,
				text: PropTypes.string.isRequired,
		};

		render() {
				return(
						<div className="message"
						     style={ {alignSelf: this.props.sender === 'bot' ?
								     'flex-start' : 'flex-end' } }>
								<p >{this.props.sender + ' : ' + this.props.text}</p>
						</div>

				)
		}
}