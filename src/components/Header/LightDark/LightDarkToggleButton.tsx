import { useLightDark } from "./useLightDark";

import LightIcon from "./LightIcon";
import DarkIcon from "./DarkIcon";
import "./_light-dark-toggle-btn.scss";

const LightDarkToggleButton = () => {
  const { theme, toggleTheme } = useLightDark();

  return (
    <button
      className="light-dark-toggle-btn"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      {theme === "dark" ? <LightIcon /> : <DarkIcon />}
    </button>
  );
};

export default LightDarkToggleButton;
