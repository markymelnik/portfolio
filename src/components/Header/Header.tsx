import { useRef } from "react";

import useHeaderHideOnScroll from "../../hooks/useHeaderHideOnScroll";
import useOutsideClick from "../../hooks/useOutsideClick";
import Logo from "./Logo/Logo";
import MobileMenu from "./MobileMenu/MobileMenu";
import MobileMenuToggleButton from "./MobileMenuToggleButton/MobileMenuToggleButton";
import NavBar from "./NavBar/NavBar";
import "./_header.scss";
import { useAppState } from "../../context/AppStateContext";

const Header = () => {
  const { activeTab, setActiveTab, toggleMobileMenu, isMobileMenuOpen, setIsScrolling } = useAppState();

  console.log(isMobileMenuOpen);


  const mobileMenuRef = useRef(null);

  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  const handleMobileMenuToggle = () => {
    toggleMobileMenu();
    console.log('hit')
  };

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
          onMobileMenuButtonClick={toggleMobileMenu}
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
