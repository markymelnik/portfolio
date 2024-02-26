import "./_divider.scss";

type DividerProps = {
  customClass: string;
}
const Divider = ({ customClass }: DividerProps) => {
  return <hr className={`divider ${customClass}`} />;
};

export default Divider;
