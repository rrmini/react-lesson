import React from 'react'
import { Container, Grid} from '@material-ui/core';
import Header from './Header'
import MessageFild from './MessageFild'
import ChatList from './ChatList'

export default class Layout extends React.Component {
		render(){
				return(
						<Container>
								<Grid container spacing={3}>
										<Grid item xs={12}>
												<Header title='Chat'/>
										</Grid>
										<Grid item xs={4}>
												<ChatList/>
										</Grid>
										<Grid item xs={8}>
												<MessageFild></MessageFild>
										</Grid>
								</Grid>
						</Container>
				)
		}
}