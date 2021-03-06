import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
// import { Link } from 'react-router-dom'
import { push } from 'connected-react-router'

class Profile extends React.Component {
		static propTypes = {
				userName: PropTypes.string.isRequired,
				email: PropTypes.string.isRequired,
				push: PropTypes.func.isRequired,
		};


		render () {
				return (
						<div>
								<h1>Profile page</h1>
								<h3>{ this.props.userName }</h3>
								<p>e-mail:
										<a href="mailto:exemple@gmail.com">{ this.props.email }</a>
								</p>
								<a className="link" onClick={ () => this.props.push(`/`)}> back </a>
						</div>
				)
		}
}

const mapStateToProps = ({ profileReducer }) => ({
		userName: profileReducer.userName,
		email: profileReducer.email,
});

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);