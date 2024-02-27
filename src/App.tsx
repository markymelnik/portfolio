import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import ScrollToTop from "./hooks/useScrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/_global.scss";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.className = `dark`;
  }, []);

  const [activeTab, setActiveTab] = useState<string>("home");
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  return (
    <>
  
  
    <BrowserRouter>
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
    </BrowserRouter>
    </>
  );
};

export default App;
