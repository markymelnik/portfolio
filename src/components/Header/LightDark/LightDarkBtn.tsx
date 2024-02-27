import { useEffect, useState } from "react";
import "./light-dark-btn.scss";

const LightDarkBtn = () => {
  const [theme, setTheme] = useState<string>('light');

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
      className="light-dark-toggle-btn"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      {theme === "dark" ? 'Light' : 'Dark'}
    </button>
  );
};


export default LightDarkBtn;
