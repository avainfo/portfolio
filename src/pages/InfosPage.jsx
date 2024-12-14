import React from "react";
import "../style/pages/infosPage/InfosPage.scss"
import {HeaderButton} from "../components/header/HeaderButton";
import {SkillBar} from "../components/skills/SkillBar";

export function InfosPage() {

	const techSkills = [
		["Mobile applications", 95],
		["Software development", 95],
		["Website development", 90],
		["API", 85],
		["Embedded systems", 80],
		["Pentesting", 75],
	];

	function test() {
		console.log(techSkills);
	}

	test();

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
			<div className="skill-part">
				<div className="skill-bars">
					{
						techSkills.map(skill => {
							return <div>
								<SkillBar skill={skill} />
							</div>
						})
					}
				</div>
				<div className="skill-rounds">
				</div>
			</div>
		</div>
	);
}