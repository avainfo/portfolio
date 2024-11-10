import React from "react";
import "../../style/header/HeaderTitle.scss"

interface HeaderTitleProps {
	title?: string,
	scrollTo: number
}

export function HeaderTitle({title, scrollTo}: HeaderTitleProps) {
	return (
		<div
			className="headerTitle"
			onClick={() => {
				window.scrollTo({top: scrollTo * window.innerHeight, behavior: "smooth"});
			}}>
			{title}
		</div>
	);
}