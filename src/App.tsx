import React, {useState} from 'react';
import './App.scss';
import {HeaderTitle} from "./components/header/HeaderTitle";
import {Header} from "./components/header/Header";
import {Links} from "./components/utils/Links";
import {MainPage} from "./pages/MainPage";
import {InfosPage} from "./pages/InfosPage";
import {ProjectPage} from "./pages/ProjectPage";

function App() {
	let header: Array<string> = [
		"Home",
		"About",
		"Projects",
		"Contacts",
	];

	const [backgroundUrl, setBackgroundUrl] = useState("/assets/card-front.png");
	// const currentScrollPos = useRef(0);
	// const isScrolling = useRef(false);
	//
	// loadEvents();
	//
	// const handleScroll = (event: any) => {
	// 	event.preventDefault();
	//
	// 	if (isScrolling.current) return;
	//
	// 	isScrolling.current = true;
	// 	const viewportHeight = window.innerHeight;
	// 	let newScrollPos = currentScrollPos.current;
	//
	// 	if (event.deltaY > 0) {
	// 		newScrollPos = Math.min(currentScrollPos.current + viewportHeight, document.body.scrollHeight - viewportHeight);
	// 	} else {
	// 		console.log()
	// 		newScrollPos = Math.max(currentScrollPos.current - viewportHeight, 0);
	// 	}
	//
	// 	currentScrollPos.current = newScrollPos;
	//
	// 	setTimeout(() => {
	// 		isScrolling.current = false;
	// 	}, 500);
	//
	// 	window.scrollTo({
	// 		top: newScrollPos,
	// 		behavior: 'smooth'
	// 	});
	// };
	//
	// useEffect(() => {
	// 	window.addEventListener('wheel', handleScroll, {passive: false});
	// 	return () => window.removeEventListener('wheel', handleScroll);
	// }, []);

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
			<ProjectPage/>
		</div>
	);
}

export default App;
