import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Importer BrowserRouter
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter basename="/<nom-du-repository>"> {/* Ajouter le basename */}
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

// Si vous souhaitez mesurer les performances de votre application, passez une fonction
// pour enregistrer les résultats (par exemple : reportWebVitals(console.log))
// ou envoyez à un point de terminaison d'analytique. En savoir plus : https://bit.ly/CRA-vitals
reportWebVitals();
