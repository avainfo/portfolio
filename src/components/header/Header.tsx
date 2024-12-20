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
            <img src={process.env.PUBLIC_URL + "/assets/profilepic.png"} alt=""/>
            <HeaderTitle title="Do Souto Antonin" scrollTo={0}/>
        </div>
        <div className="right">
            {props.strings.map(props.callbackFunction)}
            <HeaderButton title={"Contact me"}/>
        </div>
    </div>;
}