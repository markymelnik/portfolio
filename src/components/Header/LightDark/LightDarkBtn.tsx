import { useEffect, useState } from "react";
import { Icons } from "../../../lib/icons/Icons";
import "./light-dark-btn.scss";

const LightDarkBtn = () => {
  const [theme, setTheme] = useState<string>('dark');

  useEffect(() => {
		const initialTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
		setTheme(initialTheme);
	}, [])

  const toggleTheme = () => {
		if (document.body.classList.contains('light')) {
			document.body.classList.remove('light');
			document.body.classList.add('dark');
			setTheme('dark');
		} else {
			document.body.classList.remove('dark');
			document.body.classList.add('light');
			setTheme('light');
		}
	}

  return (
    <button
      className="light-dark-btn"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      {theme === "dark" ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
    </button>
  );
};


export default LightDarkBtn;
