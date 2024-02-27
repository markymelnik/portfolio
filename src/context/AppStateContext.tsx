import { ReactNode, createContext, useContext, useState } from 'react';

interface AppState {
  activeTab: string;
  isScrolling: boolean;
  isMobileMenuOpen: boolean;
  setActiveTab: (tab: string) => void;
  setIsScrolling: (scrolling: boolean) => void;
  toggleMobileMenu: () => void;
}

const defaultState: AppState = {
  activeTab: 'home',
  isScrolling: false,
  isMobileMenuOpen: false,
  setActiveTab: () => {},
  setIsScrolling: () => {},
  toggleMobileMenu: () => {},
};

const AppStateContext = createContext<AppState>(defaultState);

export const useAppState = () => useContext(AppStateContext);

interface AppStateProvider {
	children: ReactNode;
}

export const AppStateProvider = ({ children }: AppStateProvider) => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <AppStateContext.Provider
      value={{
        activeTab,
        isScrolling,
        isMobileMenuOpen,
        setActiveTab,
        setIsScrolling,
        toggleMobileMenu,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
