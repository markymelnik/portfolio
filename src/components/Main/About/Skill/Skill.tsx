import './_skill.scss';

type SkillProps = {
  skillName: string;
  svg: React.ReactElement,
}

const Skill = ({ skillName, svg }: SkillProps) => {
  return (
    <li className={`about-skill`}><span>{svg}</span>{skillName}</li>
  )
}

export default Skill;