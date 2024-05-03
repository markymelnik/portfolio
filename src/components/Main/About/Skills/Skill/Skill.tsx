import { ReactElement } from "react";
import "./skill.scss";

type SkillProps = {
  skillName: string;
  svg: ReactElement;
};

const Skill = ({ skillName, svg }: SkillProps) => {

  const cleanSkillName = skillName.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
  return (
    <li className={`skill ${cleanSkillName}`}>
      <span>{svg}</span>
      {skillName}
    </li>
  );
};

export default Skill;
