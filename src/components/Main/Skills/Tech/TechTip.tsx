import './_tech.scss';

type TechTipProps = {
  text: string;
}

const TechTip = ({ text }: TechTipProps) => {
  return (
    <div className="tech-tip-container">
      <div className="tech-tip-text">{text.toUpperCase()}</div>
    </div>
  );
}

export default TechTip;