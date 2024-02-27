
import "./_mobile-menu-toggle-btn.scss";

type MobileMenuToggleButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
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
  
    </button>
  );
};

export default MobileMenuToggleButton;
