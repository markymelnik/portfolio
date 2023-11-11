import { useEffect, useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Main from "./components/Main/Main";
import ScrollToTop from "./hooks/useScrollToTop";
import Header from "./components/Header/Header";
import "./styles/_global.scss";
import Footer from "./components/Footer/Footer";
import { useLightDark } from "./components/Header/LightDark/useLightDark";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const { theme } = useLightDark();

  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  const [activeTab, setActiveTab] = useState<string>("home");
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsScrolling={setIsScrolling}
          toggleMobileMenu={toggleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <Main setActiveTab={setActiveTab} isScrolling={isScrolling} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
