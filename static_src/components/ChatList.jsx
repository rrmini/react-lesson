import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default class ChatList extends React.Component {
		render () {
				return(
						<List component="nav" aria-label="main mailbox folders">
								<ListItem button>
										<ListItemText primary="Inbox" />
								</ListItem>
								<ListItem button>
										<ListItemText primary="Drafts" />
								</ListItem>
								<ListItem button>
										<ListItemText primary="Drafts" />
								</ListItem>
								<ListItem button>
										<ListItemText primary="Drafts" />
								</ListItem>
								<ListItem button>
										<ListItemText primary="Drafts" />
								</ListItem>
						</List>
				)
		}
}