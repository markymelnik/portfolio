import { ReactNode, createContext, useContext, useState } from 'react';

interface AppState {
  activeTab: string;
  isScrolling: boolean;
  setActiveTab: (tab: string) => void;
  setIsScrolling: (scrolling: boolean) => void;
}

const defaultState: AppState = {
  activeTab: 'home',
  isScrolling: false,
  setActiveTab: () => {},
  setIsScrolling: () => {},
};

const AppStateContext = createContext<AppState>(defaultState);

export const useAppState = () => useContext(AppStateContext);

interface AppStateProvider {
	children: ReactNode;
}

export const AppStateProvider = ({ children }: AppStateProvider) => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  return (
    <AppStateContext.Provider
      value={{
        activeTab,
        isScrolling,
        setActiveTab,
        setIsScrolling,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
