import React, {useState} from 'react';
import './App.scss';
import {HeaderTitle} from "./components/header/HeaderTitle";
import {Header} from "./components/header/Header";
import {Links} from "./components/utils/Links";
import {MainPage} from "./pages/app/MainPage";
import {InfosPage} from "./pages/app/InfosPage";
import {ProjectPage} from "./pages/app/ProjectPage";
import {FormationPage} from "./pages/app/FormationPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ProjectInfosPage} from "./pages/project/ProjectInfosPage";
import ContactPage from "./pages/contact/ContactPage";

function App() {
    let header: Array<string> = [
        "Home",
        "About",
        "Projects"
    ];

    const [backgroundUrl, setBackgroundUrl] = useState(`${process.env.PUBLIC_URL}/assets/card-front.png`);

    return (
        <BrowserRouter basename="/portfolio">
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
                <Route path="/project/:id" element={<ProjectInfosPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
