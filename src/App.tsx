import React from 'react';
import './App.scss';

function App() {
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
					</div>
					<div className="right">
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
