import "../style/pages/projectPage/ProjectPage.scss";
import {ImageCard} from "../components/card/ImageCard";
import json from "../projects.json";

export function ProjectPage() {

    const projects = json.projects;

    return (
        <div>
            <h1 className="title-page">Projets</h1>
            <div className="projects">
                {
                    projects.map((project, i) => {
                        return <ImageCard title={project.title} img={project.path + ".png"} key={i}/>
                    })
                }
            </div>
        </div>
    );
}
