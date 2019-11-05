import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { Link } from 'react-router-dom'

class Profile extends React.Component {
		static propTypes = {
				userName: PropTypes.string.isRequired,
				email: PropTypes.string.isRequired,
		};

		render () {
				return (
						<div>
								<h1>Profile page</h1>
								<h3>{ this.props.userName }</h3>
								<p>e-mail:
										<a href="mailto:exemple@gmail.com">{ this.props.email }</a>
								</p>
								<Link to="/"> back </Link>
						</div>
				)
		}
}

const mapStateToProps = ({ profileReducer }) => ({
		userName: profileReducer.userName,
		email: profileReducer.email,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);