import React from "react";
import "../../style/card/Card.scss";

export function Card() {

	return <div className="card">
		<div className="inner">
			<div className="front">
				<img src="/assets/card-front.png" alt=""/>
			</div>
			<div className="back">
				<img src="/assets/card-back.png" alt=""/>
			</div>
		</div>
	</div>
}