import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';
import './_sidebar.scss';

type SidebarProps = {
  activeTab: string,
  onNavigate: (tab: string) => void;
}

const Sidebar = ({ activeTab, onNavigate }: SidebarProps) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-top">
        <Logo />
        <NavBar activeTab={activeTab} onNavigate={onNavigate} />
      </div>
    </div>
  )
}

export default Sidebar;