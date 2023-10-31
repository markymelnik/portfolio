import './_tech.scss';
import TechTip from './TechTip';

type TechProps = {
  customClass: string,
  svg: React.ReactElement,
}

const Tech = ({ customClass, svg }: TechProps) => {
  return (
    <li
      className={`tech-box ${customClass}`}
    >
      {svg}
      <TechTip text={customClass} />
    </li>
  );
}

export default Tech;