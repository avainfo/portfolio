import "../../style/components/card/ImageCard.scss"

export function ImageCard({title, img, event}: { title: string, img: string, event?: Function }) {
    return (
        <div className="image-card" style={{backgroundImage: 'url("/assets/' + img + '")'}} onClick={(e) => {
            if (event != undefined) {
                event();
            }
        }}>
            <div className="title">
                {title}
            </div>
        </div>
    );
}
