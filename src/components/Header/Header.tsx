import { useRef, useState } from "react";

import useHeaderHideOnScroll from "../../hooks/useHeaderHideOnScroll";
import useOutsideClick from "../../hooks/useOutsideClick";
import Logo from "./Logo/Logo";
import MobileMenu from "./MobileMenu/MobileMenu";
import MobileMenuToggleButton from "./MobileMenuBtn/MobileMenuBtn";
import NavBar from "./NavBar/NavBar";
import "./_header.scss";
import { useAppState } from "../../context/AppStateContext";

const Header = () => {
  const { activeTab, setActiveTab, setIsScrolling } = useAppState();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const mobileMenuRef = useRef(null);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(prev => !prev);
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  useOutsideClick(mobileMenuRef, closeMobileMenu);

  useHeaderHideOnScroll();

  return (
    <header className="header-container">
      <div className="header-content">
        <Logo />
        <NavBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsScrolling={setIsScrolling}
          customClass={"desktop-navbar"}
        />
        <MobileMenu
          mobileMenuRef={mobileMenuRef}
          isOpen={isMobileMenuOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsScrolling={setIsScrolling}
          customClass={`mobile-navbar`}
          closeMobileMenu={closeMobileMenu}
        />
        <MobileMenuToggleButton
          onClick={handleMobileMenuToggle}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </div>
    </header>
  );
};

export default Header;
