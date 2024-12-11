import React from "react";
import "../../style/components/card/CardEffect.scss";

interface CardEffectProps {
	backgroundUrl: string,
}

export function CardEffect({backgroundUrl}: CardEffectProps) {
	return <div className="card-effect" style={{backgroundImage: `url(${backgroundUrl})`}}>
	</div>
}