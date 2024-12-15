import "../../style/components/skills/SkillRound.scss"

export function SkillRound({techs, id}: { techs: (string)[], id: number }) {
    return <div className="skill-round">
        <div className="round">
            <div className="id" style={{background: techs[1]}}>
                {id + 1}
            </div>
        </div>
        <div className="skill-title">{techs[0]}</div>
    </div>
}