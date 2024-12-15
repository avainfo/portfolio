import "../style/pages/formationPage/FormationPage.scss";
import {ImageCard} from "../components/card/ImageCard";

export function FormationPage() {

    const formations = [
        ["OpenClassrooms", "formations/OpenClassrooms"],
        ["CEH: HCI", "formations/Hacking Cloud Infrastructure"],
        ["CEH: SHPE", "formations/System Hacking and Privilege Escalation"],
        ["AWS", "formations/AWS"],
        ["Bac", "formations/Bac"],
    ]

    return (
        <div>
            <h1 className="title-page">Formations</h1>
            <div className="formations">
                {
                    formations.map((formation, i) => {
                        return <ImageCard title={formation[0]} img={formation[1] + ".png"} key={i}/>
                    })
                }
            </div>
        </div>
    );
}
