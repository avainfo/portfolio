import React from 'react';
import './App.scss';
import {HeaderTitle} from "./components/header/HeaderTitle";
import {HeaderButton} from "./components/header/HeaderButton";

function App() {
	let header: Array<string> = [
		"Home",
		"About",
		"Projects",
		"Contacts",
	];

	return (
		<div className="app">
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
			<link
				href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
				rel="stylesheet"/>
			<div className="mainPage">
				<div className="header">
					<div className="left">
						<img src="/assets/profilepic.png" alt=""/>
						<HeaderTitle title="Do Souto Antonin"/>
					</div>
					<div className="right">
						{header.map((title, index) => <HeaderTitle title={title} key={index}/>)}
						<HeaderButton title={"Download CV"}/>
					</div>
				</div>
				<div className="content"></div>
			</div>
			<div className="infos"></div>
			<div className="projects"></div>
		</div>
	);
}

export default App;
