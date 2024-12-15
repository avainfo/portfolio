import {useLocation, useParams} from "react-router-dom";
import "../../style/pages/ProjectInfosPage.scss";

export function ProjectInfosPage() {
    let {id} = useParams();
    const location = useLocation();
    const {project} = location.state;
    if (!project) return <div>Project not found</div>;

    return (
        <div className="project-infos" onLoad={(event) => {
            document.getElementsByClassName("text")[0].innerHTML = project.description;
            console.log("test")
        }}>
            <div className="left">
                <div>{project.title}</div>
                <img src={"/assets/" + project.path + ".png"} alt={project.title}/>
            </div>
            <div className="right">
                <p className="text"></p>
            </div>
        </div>
    );
}
