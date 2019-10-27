import React from 'react'
import PropTypes from 'prop-types'



export default class Header extends React.Component {
		static propTypes = {
				title: PropTypes.string,
		};

		render() {
				return <h1 className="header"> { this.props.title } </h1>
		}
}