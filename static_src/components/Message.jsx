import React from 'react'
import PropTypes from 'prop-types'

export default class Child extends React.Component {

		static propTypes = {
				from: PropTypes.string.isRequired,
				text: PropTypes.string.isRequired,
		};


		render() {
				return(
								<p >{this.props.from + ' : ' + this.props.text}</p>
				)
		}
}