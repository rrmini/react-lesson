import React from 'react'
// import Btn from './Button';
import Message from './Message.jsx'

const botAnswers = [
		{from: 'AngryBot', text: 'Отстань, я робот'},
		{from: 'AngryBot', text: 'Кто такая Сири ???'},
		{from: 'AngryBot', text: 'Поговорите лучше с Алисой'},
		{from: 'AngryBot', text: 'Тебе конец, ястребиный глаз!'},
];

function randomChoice(arr) {
		return arr[Math.floor(arr.length * Math.random())];
}

export default class App extends React.Component {

		state = {
				header: 'Чат',

				msg: [
						{from: 'Fred',text: 'Привет'},
						{from: 'Fred',text: 'Как дела?'}
				]
		};

		componentDidUpdate (){
				// console.log(new Date().getTime());
				const { msg } = this.state;

				let upDateMessage = () => {
						this.setState({ 'msg': [...msg, randomChoice(botAnswers)]});
				};

				if (msg[msg.length-1].from !== 'AngryBot') {
						setTimeout(upDateMessage, 1000);
				}
				

		}

		componentDidMount () {}

		handelSendMessage = () => {
				const { msg } = this.state;
				let answer = {from: 'Jon', text: 'I`ts Ok'};
				setTimeout(() => {this.setState({ 'msg': [...msg, answer]})}, 1000);

		};

		render() {

				const { msg } = this.state;

				const msgElements = msg.map(item => <Message key={(new Date().getTime()) * Math.random()} from={item.from} text={item.text}/>);

				return(
						<div>
								<h1 key="parent" >{ this.state.header }</h1>
								{ msgElements }
								<button onClick = { this.handelSendMessage }>Send message</button>
						</div>
				)
		}
}