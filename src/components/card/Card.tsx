import "../../style/card/Card.scss";
import React from "react";

interface CardProps {
	event: (value: string) => void
}

export function Card({event}: CardProps) {
	return <div className="card">
		<div className="inner">
			<div className="front"
			     onMouseEnter={() => {
				     event("/assets/card-back.png");
			     }}
			>
				<img src="/assets/card-front.png" alt=""/>
			</div>
			<div className="back"
			     onMouseLeave={() => {
				     event("/assets/card-front.png");
			     }}
			>
				<img src="/assets/card-back.png" alt=""/>
			</div>
		</div>
	</div>
}