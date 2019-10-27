import React from 'react'
import PropTypes from 'prop-types'

export default class Child extends React.Component {

		static propTypes = {
				from: PropTypes.string.isRequired,
				text: PropTypes.string.isRequired,
		};


		render() {
				return(
						<div className="message"
									style={ {alignSelf: this.props.from == 'AngryBot' ?
									'flex-start' : 'flex-end' } }>
								<p >{this.props.from + ' : ' + this.props.text}</p>
						</div>

				)
		}
}