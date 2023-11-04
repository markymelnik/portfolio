import MobileMenuCloseIcon from './MobileMenuCloseIcon';
import MobileMenuOpenIcon from './MobileMenuOpenIcon';
import './_mobile-menu-toggle-btn.scss';

type MobileMenuToggleButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isMobileMenuOpen: boolean;
}

const MobileMenuToggleButton = ({ onClick, isMobileMenuOpen }: MobileMenuToggleButtonProps) => {
  return (
    <button className="mobile-menu-toggle-btn" onClick={onClick}>
      <span>{isMobileMenuOpen ? <MobileMenuCloseIcon /> : <MobileMenuOpenIcon />}</span>
    </button>
  );
};

export default MobileMenuToggleButton;