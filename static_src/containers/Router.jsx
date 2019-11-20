import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Layout from './Layout';
import Profile from "./Profile";
import InstallPopup from '../components/InstallPopup'

export default class Router extends React.Component {

		render() {
				return (
						[
						<Typography variant="h6" component="h3" gutterBottom>

								<InstallPopup key={'installPopup'}/>
								<Switch>
										<Route exact path='/' component={ Layout } />
										<Route exact path='/profile/' component={ Profile } />
										<Route exact
										       path='/chat/:chatId/'
										       render={ obj => <Layout
												       chatId={ Number(obj.match.params.chatId) }/>
										       }
										/>
								</Switch>
						</Typography>
						]
				)
		}
}
