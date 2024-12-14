import "../../style/components/card/Card.scss";
import React, {useState} from "react";

interface CardProps {
	event: (value: string) => void
}

export function Card({event}: CardProps) {
	const [, setIsHovered] = useState(false);

	return (
		<div className="card"
		     onMouseEnter={() => {
			     setIsHovered(true);
			     event("/assets/card-back.png");
		     }}
		     onMouseLeave={() => {
			     setIsHovered(false);
			     event("/assets/card-front.png");
		     }}
		>
			<div className="inner">
				<div className="front">
					<img src="/assets/card-front.png" alt=""/>
				</div>
				<div className="back">
					<img src="/assets/card-back.png" alt=""/>
				</div>
			</div>
		</div>
	);
}