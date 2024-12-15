import "../style/pages/projectPage/ProjectPage.scss";
import {ImageCard} from "../components/card/ImageCard";

export function ProjectPage() {

    const projects = [
        ["Amazon Meet", "projects/amazon_meets"],
        ["Miroir connecté", "projects/connected_mirror"],
        ["Remercee", "projects/remercee"],
        ["Ava Maths", "projects/ava_maths"],
        ["The Transporter", "projects/transporter"],
        ["Kasa", "projects/kasa"],
    ]

    return (
        <div>
            <h1 className="title-page">Projets</h1>
            <div className="projects">
                {
                    projects.map((project, i) => {
                        return <ImageCard title={project[0]} img={project[1] + ".png"} key={i}/>
                    })
                }
            </div>
        </div>
    );
}
