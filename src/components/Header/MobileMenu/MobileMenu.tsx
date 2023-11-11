import useMobileMenuHideOnScroll from "../../../hooks/useMobileMenuHideOnScroll";
import LightDarkToggleButton from "../LightDark/LightDarkToggleButton";
import NavBar from "../NavBar/NavBar";
import DimOverlay from "./DimOverlay/DimOverlay";
import "./_mobile-menu.scss";

type MobileMenuProps = {
  isOpen: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setIsScrolling: (status: boolean) => void;
  onMobileMenuButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  closeMobileMenu: () => void;
  customClass: string;
  mobileMenuRef: React.MutableRefObject<null>;
};

const MobileMenu = ({
  isOpen,
  activeTab,
  setActiveTab,
  setIsScrolling,
  closeMobileMenu,
  customClass,
  mobileMenuRef,
}: MobileMenuProps) => {
  useMobileMenuHideOnScroll({ closeMobileMenu });

  return (
    <>
      <DimOverlay isShown={isOpen} />
      <div
        ref={mobileMenuRef}
        className={`mobile-menu-container ${isOpen ? `open` : ``}`}
      >
        <div className="mobile-menu-top">
          <LightDarkToggleButton />
        </div>
        <NavBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsScrolling={setIsScrolling}
          customClass={customClass}
          onNavClick={closeMobileMenu}
        />
      </div>
    </>
  );
};

export default MobileMenu;
