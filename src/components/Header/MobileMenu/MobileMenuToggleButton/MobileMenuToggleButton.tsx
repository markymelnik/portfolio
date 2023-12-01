import CloseIcon from "./CloseIcon";
import OpenIcon from "./OpenIcon";
import "./_mobile-menu-toggle-btn.scss";

type MobileMenuToggleButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isMobileMenuOpen: boolean;
};

const MobileMenuToggleButton = ({
  onClick,
  isMobileMenuOpen,
}: MobileMenuToggleButtonProps) => {
  const IconComponent = isMobileMenuOpen ? CloseIcon : OpenIcon;

  return (
    <button
      className="mobile-menu-toggle-btn"
      onClick={onClick}
      aria-expanded={isMobileMenuOpen}
      aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
    >
      <IconComponent className={`mobile-menu-icon`} />
    </button>
  );
};

export default MobileMenuToggleButton;
