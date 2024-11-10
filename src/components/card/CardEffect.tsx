import React from "react";
import "../../style/card/CardEffect.scss";

interface CardEffectProps {
	backgroundUrl: string,
}

export function CardEffect({backgroundUrl}: CardEffectProps) {
	return <div className="card-effect" style={{backgroundImage: `url(${backgroundUrl})`}}>
	</div>
}