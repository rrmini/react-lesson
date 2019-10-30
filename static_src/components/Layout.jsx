import React from 'react'
import PropTypes from "prop-types";
import { Container, Grid} from '@material-ui/core';
import Header from './Header'
import MessageFild from './MessageFild'
import ChatList from './ChatList'

export default class Layout extends React.Component {
		static propTypes = {
				chatId: PropTypes.number.isRequired,
				// chatName: PropTypes.string.isRequired,
		};

		static defaultProps = {
				chatId: 1,
		};

		// state = {
		// 		chatName: [
		// 				'Cats',
		// 				'Dogs',
		// 				'Animals',
		// 		]
		// };

		render(){
				// const { chatId } = this.props;
				return(
						<Container>
								<Grid container spacing={3}>
										<Grid item xs={12}>
												<Header chatId={ this.props.chatId }/>
										</Grid>
										<Grid item xs={4}>
												<ChatList/>
										</Grid>
										<Grid item xs={8}>
												<MessageFild chatId={ this.props.chatId}/>
										</Grid>
								</Grid>
						</Container>
				)
		}
}