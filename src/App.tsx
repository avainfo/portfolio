import React from 'react';
import './App.scss';
import {HeaderTitle} from "./components/header/HeaderTitle";
import {Header} from "./components/header/Header";
import {Links} from "./components/utils/Links";
import {MainPage} from "./components/pages/MainPage";
import {loadEvents} from "./script/eventListener";

function App() {
	let header: Array<string> = [
		"Home",
		"About",
		"Projects",
		"Contacts",
	];

	const [backgroundUrl, setBackgroundUrl] = React.useState("/assets/card-front.png");

	loadEvents();

	return (
		<div className="app">
			<Links/>
			<Header
				strings={header}
				callbackFunction={(title, index) => {
					return <HeaderTitle title={title} key={index} scrollTo={index}/>;
				}}/>
			<MainPage event={(value) => setBackgroundUrl(value)} backgroundUrl={backgroundUrl}/>
			<div className="infos"></div>
			<div className="projects"></div>
		</div>
	);
}

export default App;
