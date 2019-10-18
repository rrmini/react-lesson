import React from 'react';
import ReactDOM from 'react-dom';

class Btn extends React.Component {
		render () {
				return <button onClick={sayhi}>Ok</button> ;
		}
}

function sayhi() {
		messages.push("ok");
		console.log(messages);
		ReactDOM.render(
				<div>
						<MessageField messages={ messages } />
						<Btn/>
				</div>
				,
				document.getElementById('root')
		)
}

let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
		return (

						props.messages.map(message => <MessageComponent text={ message } />)

		);
};

ReactDOM.render(
		<div>
				<MessageField messages={ messages } />
				<Btn/>
		</div>
		,
		document.getElementById('root'),
);