import React from 'react'
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Container, Grid} from '@material-ui/core';
import Header from '../components/Header'
import MessageField from './MessageFild'
import ChatList from './ChatList'
// import { sendMessage } from "../actions/messageActions";
// import connect from "react-redux/es/connect/connect";





export default class Layout extends React.Component {
		static propTypes = {
				chatId: PropTypes.number.isRequired,
		};

		static defaultProps = {
				chatId: 1,
		};

		render(){
				return(
						<Container>
								<Grid container spacing={3}>
										<Grid item xs={12} md={12}>
												<Header chatId={ this.props.chatId }/>
										</Grid>
										<Grid item xs={12} md={4}>
												<ChatList/>
										</Grid>
										<Grid item xs={12} md={8}>
												<MessageField
														chatId={ this.props.chatId}
												 />
										</Grid>
								</Grid>
						</Container>
				)
		}
}

// const mapStateToProps = ({  }) => ({});
//
// const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch); //sendMessage
//
// export default connect(mapStateToProps, mapDispatchToProps)(Layout);