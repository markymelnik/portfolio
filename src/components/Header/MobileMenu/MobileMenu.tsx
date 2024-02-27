import type { MutableRefObject } from "react";
import useMobileMenuHideOnScroll from "../../../hooks/useMobileMenuHideOnScroll";
import NavBar from "../NavBar/NavBar";
import DimOverlay from "./DimOverlay/DimOverlay";
import LightDarkBtn from "../LightDark/LightDarkBtn";
import "./_mobile-menu.scss";

type MobileMenuProps = {
  isOpen: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setIsScrolling: (status: boolean) => void;
  closeMobileMenu: () => void;
  customClass: string;
  mobileMenuRef: MutableRefObject<null>;
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
          <LightDarkBtn />
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
