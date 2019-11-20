import React from 'react'
import { Container, Grid} from '@material-ui/core';
import Header from '../components/Header'
import MessageField from './MessageFild'
import ChatList from './ChatList'

export default class Layout extends React.Component {

		render(){
				return(
						<Container>
								<Grid container spacing={3}>
										<Grid item xs={12} md={12}>
												<Header key={'header'} chatId={ this.props.chatId }/>
										</Grid>
										<Grid item xs={12} md={4}>
												<ChatList key={'chatList'} />
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
