import { useRef } from 'react';
import useHeaderHideOnScroll from '../../hooks/useHeaderHideOnScroll';
import useOutsideClick from '../../hooks/useOutsideClick';
import Logo from './Logo/Logo';
import MobileMenu from './MobileMenu/MobileMenu';
import MobileMenuToggleButton from './MobileMenu/MobileMenuToggleButton/MobileMenuToggleButton';
import NavBar from './NavBar/NavBar';
import './_header.scss';

type HeaderProps = {
  activeTab: string,
  setActiveTab: (tab: string) => void;
  setIsScrolling: (status: boolean) => void;
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

const Header = ({ activeTab, setActiveTab, setIsScrolling, toggleMobileMenu, isMobileMenuOpen }: HeaderProps) => {

  const mobileMenuRef = useRef(null);

  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  useOutsideClick(mobileMenuRef, closeMobileMenu);

  useHeaderHideOnScroll();
  
  return (
    <header className="header-container">
      <div className="header-top">
        <Logo />
        <NavBar activeTab={activeTab} setActiveTab={setActiveTab} setIsScrolling={setIsScrolling} customClass={'desktop-navbar'} />
        <MobileMenu mobileMenuRef={mobileMenuRef} isOpen={isMobileMenuOpen} activeTab={activeTab} setActiveTab={setActiveTab} setIsScrolling={setIsScrolling} customClass={`mobile-navbar`} onMobileMenuButtonClick={toggleMobileMenu} closeMobileMenu={closeMobileMenu} />
        <MobileMenuToggleButton onClick={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
      </div>
    </header>
  )
}

export default Header;