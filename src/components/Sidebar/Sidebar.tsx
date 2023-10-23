import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';
import './_sidebar.scss';

type SidebarProps = {
  activeTab: string,
  setActiveTab: (tab: string) => void;
  setIsScrolling: (status: boolean) => void;
}

const Sidebar = ({ activeTab, setActiveTab, setIsScrolling }: SidebarProps) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-top">
        <Logo />
        <NavBar activeTab={activeTab} setActiveTab={setActiveTab} setIsScrolling={setIsScrolling} />
      </div>
    </div>
  )
}

export default Sidebar;