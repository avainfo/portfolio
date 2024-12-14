import React from "react";
import "../../style/pages/infosPage/InfosPage.scss"
import {HeaderButton} from "../header/HeaderButton";

export function InfosPage() {
	return (
		<div className="infos">
			<div className="info-part">
				<div className="info-title">Myself & my skills</div>
				<div className="info-desc">Passionate about <b>Programming</b> and <b>Cybersecurity</b>, I'm a versatile
					freelancer with experience in many subjects. <br/>
					At ease in dynamic environments, I'm good at problem solving and creativity, leveraging my skills to
					effectively meet challenges. In addition, having experience as an <b>IT trainer</b>, I enjoy sharing
					my knowledge to foster growth in this feld.
				</div>
				<HeaderButton title="Contact me"/>
			</div>
			<div className="skill-part"></div>
		</div>
	);
}