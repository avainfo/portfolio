import React from "react";
import "../../style/card/CardEffect.scss";

export function CardEffect() {

	return <div className="card-effect">
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