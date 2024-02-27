import { MouseEventHandler } from "react";
import { Icons } from "../../../lib/Icons";
import "./_mobile-menu-toggle-btn.scss";

type MobileMenuToggleButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isMobileMenuOpen: boolean;
};

const MobileMenuToggleButton = ({
  onClick,
  isMobileMenuOpen,
}: MobileMenuToggleButtonProps) => {

  return (
    <button
      className="mobile-menu-toggle-btn"
      onClick={onClick}
      aria-expanded={isMobileMenuOpen}
      aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
    >
      {isMobileMenuOpen ? <Icons.XIcon size={25} /> : <Icons.MobileMenu size={30} /> }
    </button>
  );
};

export default MobileMenuToggleButton;
