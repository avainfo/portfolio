import "../../style/pages/app/projectPage/ProjectPage.scss";
import {ImageCard} from "../../components/card/ImageCard";
import json from "../../projects.json";
import {useNavigate} from "react-router-dom";

export function ProjectPage() {

    const projects = json.projects;
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="title-page">Projets</h1>
            <div className="projects">
                {
                    projects.map((project, i) => {
                        return <ImageCard title={project.title} img={project.path + ".png"} event={() => {
                            navigate(`/project/${i}`, {state: {project}});
                        }} key={i}/>
                    })
                }
            </div>
        </div>
    );
}
