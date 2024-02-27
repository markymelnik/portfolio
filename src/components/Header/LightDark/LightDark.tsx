import { createContext, useState, type FC, type ReactNode } from "react";

type LightDarkContextProps = {
  theme: string;
  toggleTheme: () => void;
};

type LightDarkProviderProps = {
  children: ReactNode;
};

export const LightDarkContext = createContext<LightDarkContextProps | undefined>(undefined);

export const LightDarkProvider: FC<LightDarkProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <LightDarkContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </LightDarkContext.Provider>
  );
};
