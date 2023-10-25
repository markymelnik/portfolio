import './_tech.scss';
import TechTip from './TechTip';

type TechProps = {
  customClass: string,
  svg: React.ReactElement,
}

const Tech = ({ customClass, svg }: TechProps) => {

  return (
    <div
      className={`tech-box ${customClass}`}
    >
      {svg}
      <TechTip text={customClass} />
    </div>
  );
}

export default Tech;