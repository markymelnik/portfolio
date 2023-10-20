import './_navbar.scss';

type NavbarProps = {
  activeTab: string,
  onNavigate: (tab: string) => void;
}

const NavBar = ({ activeTab, onNavigate }: NavbarProps) => {
  return (
    <div className="navbar-container">
      <div onClick={() => onNavigate('home')} className={`navbar-home ${activeTab === 'home' ? 'active' : ''}`} >Home</div>
      <div onClick={() => onNavigate('projects')} className={`navbar-projects ${activeTab === "projects" ? "active" : ''}`}>Projects</div>
      <div onClick={() => onNavigate('about')} className={`navbar-about ${activeTab === "about" ? "active" : ''}`}>About</div>
    </div>
  )
}

export default NavBar;