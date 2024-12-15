import "../../style/header/HeaderButton.scss"
import {useNavigate} from "react-router-dom";

interface HeaderButtonProps {
    title?: string
}

export function HeaderButton({title}: HeaderButtonProps) {
    const navigate = useNavigate();
    return (
        <div className="headerButton" onClick={event => {
            navigate("/contact")
        }}>
            {title}
        </div>
    );
}