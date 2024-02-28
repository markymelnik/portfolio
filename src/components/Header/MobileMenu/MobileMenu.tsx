import type { MutableRefObject } from "react";
import useMobileMenuHideOnScroll from "../../../hooks/useMobileMenuHideOnScroll";
import NavBar from "../NavBar/NavBar";
import DimOverlay from "./DimOverlay/DimOverlay";
import LightDarkBtn from "../LightDark/LightDarkBtn";
import "./mobile-menu.scss";

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
  customClass: string;
  mobileMenuRef: MutableRefObject<null>;
};

const MobileMenu = ({
  isMobileMenuOpen,
  closeMobileMenu,
  customClass,
  mobileMenuRef,
}: MobileMenuProps) => {
  useMobileMenuHideOnScroll({ closeMobileMenu });

  return (
    <>
      <DimOverlay isShown={isMobileMenuOpen} />
      <div
        ref={mobileMenuRef}
        className={`mobile-menu-container ${isMobileMenuOpen ? `open` : ``}`}
      >
        <div className="mobile-menu-top">
          <LightDarkBtn />
        </div>
        <NavBar
          customClass={customClass}
        />
      </div>
    </>
  );
};

export default MobileMenu;
