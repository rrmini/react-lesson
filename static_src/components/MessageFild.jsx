import React from 'react'
// import Btn from './Button';
import Message from './Message.jsx'
import Header from './Header';
import '../css/styles.css'
import { Container, Input, Button } from '@material-ui/core';

const botAnswers = [
		{from: 'AngryBot', text: 'Отстань, я робот'},
		{from: 'AngryBot', text: 'Кто такая Сири ???'},
		{from: 'AngryBot', text: 'Поговорите лучше с Алисой'},
		{from: 'AngryBot', text: 'Тебе конец, ястребиный глаз!'},
];

function randomChoice(arr) {
		return arr[Math.floor(arr.length * Math.random())];
}

export default class MessageFild extends React.Component {
		constructor(props){
				super(props);
				this.textInput = React.createRef();
		}

		state = {
				header: 'Чат',

				msg: [
						{from: 'Fred',text: 'Привет'},
						{from: 'Fred',text: 'Как дела?'}
				],

				input: '',
		};

		componentDidUpdate (_prevProps, prevState){
				const { msg } = this.state;

				let upDateMessage = () => {   //  bot answer
						this.setState({ 'msg': [...msg, randomChoice(botAnswers)]});
				};

				if (msg[msg.length-1].from !== 'AngryBot' && prevState.msg.length < msg.length) {
						setTimeout(() => upDateMessage(), 1000);
				}
		}

		componentDidMount () {
				this.textInput.current.focus();
		}

		sendMessage = (message) => {
				if ( message !== '') {
						const { msg } = this.state;
						let answer = {from: 'My', text: message};
						this.setState({ 'msg': [...msg, answer]}); // my message
						this.setState({ input: '' });
				}
		};

		handleChange = (e) => {
				// console.log(e.target.value);
				this.setState({ [e.target.name]: e.target.value});
		};

		handleKeyUp = (e, message) => {
				if (e.keyCode === 13) {
						this.sendMessage(message);
				}
		};

		handleClick = (message) => {
				this.sendMessage(message);
		};

		render() {

				const { msg } = this.state;

				const msgElements = msg.map(item => <Message
						key={(new Date().getTime()) * Math.random()} from={item.from}
						text={item.text}/>);

				return(
								<div className="_layout">
										<div className='message-field'>
												{ msgElements }
										</div>
										<Input
													 ref={ this.textInput }
													 type="text"
										       name='input'
										       style={ { fontSize: '22px',
												             padding: '10px', } }
										       placeholder='Enter your message'
										       value={ this.state.input }
										       onChange={ this.handleChange }
										       onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) } />


										<Button className="message-sender"
										        onClick = { () => this.handleClick(this.state.input) }>Send message</Button>
								</div>
				)
		}
}