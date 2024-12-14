import "../../style/components/skills/SkillBar.scss"

export function SkillBar({skill}: { skill: (string | number)[] }) {
    return <div className="skill-bar">
        <div className="skill-title">{skill[0]}</div>
        <div className="bar">
            <div className="active-bar" style={{width: skill[1] + '%'}}/>
        </div>
    </div>
}