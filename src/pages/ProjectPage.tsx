import {Project} from "../components/project/Project";
import "../style/pages/projectPage/ProjectPage.scss";

export function ProjectPage() {

    const projects = [
        ["Amazon Meet", "amazon_meets"],
        ["Miroir connecté", "connected_mirror"],
        ["Remercee", "remercee"],
        ["Ava Maths", "ava_maths"],
        ["The Transporter", "transporter"],
        ["Kasa", "kasa"],
    ]

    return (
        <div className="projects">
            {projects.map((project) => {
                return <Project title={project[0]} img={project[1] + ".png"}/>
            })}
        </div>
    );
}
