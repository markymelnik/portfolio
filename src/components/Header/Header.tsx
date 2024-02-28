import { useRef, useState } from "react";

import useHeaderHideOnScroll from "../../hooks/useHeaderHideOnScroll";
import useOutsideClick from "../../hooks/useOutsideClick";
import Logo from "./Logo/Logo";
import MobileMenu from "./MobileMenu/MobileMenu";
import MobileMenuToggleButton from "./MobileMenuBtn/MobileMenuBtn";
import NavBar from "./NavBar/NavBar";
import "./header.scss";

const Header = () => {
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
          customClass={"desktop-navbar"}
        />
        <MobileMenu
          mobileMenuRef={mobileMenuRef}
          isMobileMenuOpen={isMobileMenuOpen}
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
