import React from 'react';
import './App.scss';
import {HeaderTitle} from "./components/header/HeaderTitle";
import {Header} from "./components/header/Header";
import {Links} from "./components/utils/Links";
import {Card} from "./components/card/Card";
import {CardEffect} from "./components/card/CardEffect";

function App() {
	let header: Array<string> = [
		"Home",
		"About",
		"Projects",
		"Contacts",
	];

	return (
		<div className="app">
			<Links/>
			<Header strings={header} callbackFunction={(title, index) => <HeaderTitle title={title} key={index}/>}/>
			<div className="mainPage">
				<div className="content">

				</div>
				<Card/>
				<CardEffect/>
			</div>
			<div className="infos"></div>
			<div className="projects"></div>
		</div>
	);
}

export default App;
