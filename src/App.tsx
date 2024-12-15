import React, {useState} from 'react';
import './App.scss';
import {HeaderTitle} from "./components/header/HeaderTitle";
import {Header} from "./components/header/Header";
import {Links} from "./components/utils/Links";
import {MainPage} from "./pages/MainPage";
import {InfosPage} from "./pages/InfosPage";
import {ProjectPage} from "./pages/ProjectPage";
import {FormationPage} from "./pages/FormationPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    let header: Array<string> = [
        "Home",
        "About",
        "Projects",
        "Contacts",
    ];

    const [backgroundUrl, setBackgroundUrl] = useState("/assets/card-front.png");

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
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
                        <FormationPage/>
                    </div>
                }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
