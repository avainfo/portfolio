import React from "react";
import "../../style/header/HeaderTitle.scss"

interface HeaderTitleProps {
	title?: string
}

export function HeaderTitle({title}: HeaderTitleProps) {
	return (
		<div className="headerTitle">{title}</div>
	);
}