import "../../style/components/project/Project.scss"

export function Project({title, img}: { title: string, img: string }) {
    return (
        <div className="project" style={{backgroundImage: 'url("/assets/projects/' + img + '")'}}>
            <div className="title">
                {title}
            </div>
        </div>
    );
}
