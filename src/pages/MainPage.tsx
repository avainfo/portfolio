import React from "react";
import {CardEffect} from "../components/card/CardEffect";
import {Card} from "../components/card/Card";
import "../style/pages/mainPage/Content.scss";

export function MainPage(props: { event: (value: string) => void, backgroundUrl: string }) {
	return <div className="mainPage">
		<div className="content">
			<div className="introduction">Hi, my name is</div>
			<div className="name">Antonin Do Souto</div>
			<div className="jobsTitle">Developer<br/>IT Trainer<br/>Cybersecurity</div>
		</div>
		<Card event={props.event}/>
		<CardEffect backgroundUrl={props.backgroundUrl}/>
	</div>;
}