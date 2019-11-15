import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AlertDialog extends React.Component {

		static propTypes = {
				title: PropTypes.string.isRequired,
				content: PropTypes.string.isRequired,
				open: PropTypes.bool.isRequired,
				handleClose: PropTypes.func.isRequired,
		};

		static defaultProps = {
				open: false,
		};

		// state = {
		// 		open : true,
		// };



		// handleClose = () => {
		// 		this.setState({ 'open': false })
		// 		// this.props.open = false;
		// };

		render(){
				// const {  } = this.state;
				const { title, content, open, handleClose } = this.props;
				return (
						<Dialog
								open={ open }
								onClose={handleClose}
								aria-labelledby="alert-dialog-title"
								aria-describedby="alert-dialog-description"
						>
								<DialogTitle id="alert-dialog-title">
										{ title }
								</DialogTitle>
								<DialogContent>
										<DialogContentText id="alert-dialog-description">
												{ content }
										</DialogContentText>
								</DialogContent>
								<DialogActions>
										<Button onClick={handleClose} color="primary" >
												Close
										</Button>
								</DialogActions>

						</Dialog>
				)
		}
}