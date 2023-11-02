import { useLightDark } from "./useLightDark";
import './_light-dark-toggle-btn.scss';
import LightIcon from "./LightIcon";
import DarkIcon from "./DarkIcon";

const LightDarkToggleButton = () => {
  const { theme, toggleTheme } = useLightDark();

  return (
    <button className="light-dark-toggle-btn" onClick={toggleTheme}>
      {theme === "dark" ? <LightIcon /> : <DarkIcon />}
    </button>
  );
};

export default LightDarkToggleButton;
