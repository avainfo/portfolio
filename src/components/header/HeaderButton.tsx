import "../../style/header/HeaderButton.scss"

interface HeaderButtonProps {
	title?: string
}

export function HeaderButton({title}: HeaderButtonProps) {
	return (
		<div className="headerButton">{title}</div>
	);
}