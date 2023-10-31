import './_skill.scss';

type SkillProps = {
  skillName: string;
}

const Skill = ({ skillName }: SkillProps) => {
  return (
    <li className={`about-skill`}>{skillName}</li>
  )
}

export default Skill;