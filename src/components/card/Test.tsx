import React, {useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";
import {ISourceOptions, MoveDirection, OutMode} from "@tsparticles/engine";

export function Test() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const options: ISourceOptions = useMemo(
		() => ({
			background: {
				color: {
					value: "#6A1818",
				},
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "repulse",
					},
				},
				modes: {
					push: {
						quantity: 2,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: "#ffffff",
				},
				links: {
					color: "#ffffff",
					distance: 100,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					direction: MoveDirection.none,
					enable: true,
					outModes: {
						default: OutMode.out,
					},
					random: false,
					speed: 4,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 250,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: {min: 0.5, max: 3},
				},
			},
			detectRetina: true,
		}),
		[],
	);

	if (init) {
		return <div className="card">
			<div className="inner">
				<div className="front">
					<img src={process.env.PUBLIC_URL + "/assets/card-front.png"} alt=""/>
				</div>
				<div className="back">
					<Particles
						id="tsparticles"
						options={options}
					/>
				</div>
			</div>
		</div>
	}
	return <></>;
}