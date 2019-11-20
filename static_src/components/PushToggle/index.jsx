import React from 'react';
import './styles.css';
import PropTypes from 'prop-types'
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import Button from '@material-ui/core/Button'

export default class PushToggle extends React.Component {

		state = {
				isActive: false,
		};
		// static propTypes = {
		// 		isActive: PropTypes.bool.isRequired,
		// };

		// static defaultProps = {
		// 		isActive: true,
		// };

		handleClick = () => {
				let active = !this.state.isActive;
				console.log(active);
				this.setState({ isActive: active});
		};

		render() {
				return (
				<Button  className="push" onClick={this.handleClick}>
						{ this.state.isActive ? <NotificationsIcon/> : <NotificationsOffIcon /> }

						{/*<img className="push__image" src="/images/push-off.png" alt="Push Notification"/>*/}
				</Button>)
		}
}
