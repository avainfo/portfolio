import React from "react";
import {HeaderTitle} from "./HeaderTitle";
import {HeaderButton} from "./HeaderButton";
import "../../style/header/Header.scss"

export function Header(props: {
	strings: Array<string>,
	callbackFunction: (title: string, index: number) => React.JSX.Element
}) {
	return <div className="header">
		<div className="left">
			<img src="/assets/profilepic.png" alt=""/>
			<HeaderTitle title="Do Souto Antonin"/>
		</div>
		<div className="right">
			{props.strings.map(props.callbackFunction)}
			<HeaderButton title={"Download CV"}/>
		</div>
	</div>;
}