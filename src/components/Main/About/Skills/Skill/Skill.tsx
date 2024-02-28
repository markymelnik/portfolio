import { ReactElement } from "react";
import "./skill.scss";

type SkillProps = {
  skillName: string;
  svg: ReactElement;
};

const Skill = ({ skillName, svg }: SkillProps) => {
  return (
    <li className={`skill ${skillName.toLowerCase()}`}>
      <span>{svg}</span>
      {skillName}
    </li>
  );
};

export default Skill;
