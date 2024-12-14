import React, {useEffect, useState} from 'react';
import './App.scss';
import {HeaderTitle} from "./components/header/HeaderTitle";
import {Header} from "./components/header/Header";
import {Links} from "./components/utils/Links";
import {loadEvents} from "./script/eventListener";
import {MainPage} from "./components/pages/MainPage";
import {InfosPage} from "./components/pages/InfosPage";

function App() {
	let header: Array<string> = [
		"Home",
		"About",
		"Projects",
		"Contacts",
	];

	const [backgroundUrl, setBackgroundUrl] = useState("/assets/card-front.png");
	const [currentScrollPos, setCurrentScrollPos] = useState(0);

	loadEvents();

	const handleScroll = (event: any) => {
		event.preventDefault();
		const viewportHeight = window.innerHeight;
		let newScrollPos = currentScrollPos;

		if (event.deltaY > 0) {
			newScrollPos = Math.min(currentScrollPos + viewportHeight, document.body.scrollHeight - viewportHeight);
		} else {
			newScrollPos = Math.max(currentScrollPos - viewportHeight, 0);
		}

		setCurrentScrollPos(newScrollPos);
		window.scrollTo({
			top: newScrollPos,
			behavior: 'smooth'
		});
	};

	useEffect(() => {
		window.addEventListener('wheel', handleScroll, {passive: false});
		return () => window.removeEventListener('wheel', handleScroll);
	}, [currentScrollPos]);

	return (
		<div className="app">
			<Links/>
			<Header
				strings={header}
				callbackFunction={(title, index) => {
					return <HeaderTitle title={title} key={index} scrollTo={index}/>;
				}}/>
			<MainPage event={(value) => setBackgroundUrl(value)} backgroundUrl={backgroundUrl}/>
			<InfosPage/>
			<div className="projects"></div>
		</div>
	);
}

export default App;
