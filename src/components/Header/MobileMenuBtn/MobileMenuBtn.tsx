import { Icons } from "../../../lib/icons/Icons";
import "./mobile-menu-btn.scss";

type MobileMenuBtnProps = {
  onClick: () => void;
  isMobileMenuOpen: boolean;
}

const MobileMenuBtn = ({ onClick, isMobileMenuOpen }: MobileMenuBtnProps) => {

  return (
    <button
      className="mobile-menu-btn"
      onClick={onClick}
      aria-expanded={isMobileMenuOpen}
      aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
    >
      {isMobileMenuOpen ? <Icons.XIcon size={30} /> : <Icons.MobileMenu size={30} /> }
    </button>
  );
};

export default MobileMenuBtn;
