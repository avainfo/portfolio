import React from 'react';
import './App.scss';
import {HeaderTitle} from "./components/header/HeaderTitle";
import {Header} from "./components/header/Header";
import {Links} from "./components/utils/Links";
import {CardEffect} from "./components/card/CardEffect";
import {Card} from "./components/card/Card";

function App() {
	let header: Array<string> = [
		"Home",
		"About",
		"Projects",
		"Contacts",
	];

	const [backgroundUrl, setBackgroundUrl] = React.useState("/assets/card-front.png");

	return (
		<div className="app">
			<Links/>
			<Header strings={header} callbackFunction={(title, index) => <HeaderTitle title={title} key={index}/>}/>
			<div className="mainPage">
				<div className="content">

				</div>
				<Card event={(value) => setBackgroundUrl(value)}/>
				<CardEffect backgroundUrl={backgroundUrl}/>
			</div>
			<div className="infos"></div>
			<div className="projects"></div>
		</div>
	);
}

export default App;
