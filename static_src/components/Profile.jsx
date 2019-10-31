import React from 'react'
import { Link } from 'react-router-dom'

export default class Profile extends React.Component {
		render () {
				return (
						<div>
								<h1>Profile page</h1>
								<h3>Peter Hart</h3>
								<p>e-mail:
										<a href="mailto://exemple@gmail.com">exemple@gmail.com</a>
								</p>
								<Link to="/"> back </Link>
						</div>
				)
		}
}