import LightDarkToggleButton from '../LightDark/LightDarkToggleButton';
import NavBar from '../NavBar/NavBar';
import MobileMenuToggleButton from './MobileMenuToggleButton/MobileMenuToggleButton';
import './_mobile-menu.scss';

type MobileMenuProps = {
  isOpen: boolean;
  activeTab: string,
  setActiveTab: (tab: string) => void;
  setIsScrolling: (status: boolean) => void;
  onMobileMenuButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  closeMobileMenu: () => void;
  customClass: string;
  mobileMenuRef: React.MutableRefObject<null>
}

const MobileMenu = ({ isOpen, activeTab, setActiveTab, setIsScrolling, onMobileMenuButtonClick, closeMobileMenu, customClass, mobileMenuRef }: MobileMenuProps) => {

  return (
    <div ref={mobileMenuRef} className={`mobile-menu-container ${isOpen ? `open` : ``}`}>
      <div className="mobile-menu-top">
        <LightDarkToggleButton />
        <MobileMenuToggleButton onClick={onMobileMenuButtonClick} isMobileMenuOpen={isOpen} />
      </div>
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} setIsScrolling={setIsScrolling} customClass={customClass} onNavClick={closeMobileMenu}/>
    </div>
  );
};

export default MobileMenu;