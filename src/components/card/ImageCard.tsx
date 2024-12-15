import "../../style/components/card/ImageCard.scss"

export function ImageCard({title, img, event}: { title: string, img: string, event?: Function }) {
    console.log(img)
    return (
        <div className="image-card"
             style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${img})` }}
             onClick={(e) => {
                 if (event !== undefined) {
                 event();
             }
             }}>
            <div className="title">
                {title}
            </div>
        </div>
    );
}
