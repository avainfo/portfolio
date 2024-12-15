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
                 event(process.env.PUBLIC_URL + "/assets/card-back.png");
             }}
             onMouseLeave={() => {
                 setIsHovered(false);
                 event(process.env.PUBLIC_URL + "/assets/card-front.png");
             }}
        >
            <div className="inner">
                <div className="front">
                    <img src={process.env.PUBLIC_URL + "/assets/card-front.png"} alt=""/>
                </div>
                <div className="back">
                    <img src={process.env.PUBLIC_URL + "/assets/card-back.png"} alt=""/>
                </div>
            </div>
        </div>
    );
}