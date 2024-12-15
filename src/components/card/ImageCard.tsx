import "../../style/components/card/ImageCard.scss"

export function ImageCard({title, img}: { title: string, img: string }) {
    return (
        <div className="image-card" style={{backgroundImage: 'url("/assets/' + img + '")'}}>
            <div className="title">
                {title}
            </div>
        </div>
    );
}
